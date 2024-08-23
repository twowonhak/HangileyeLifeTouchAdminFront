import React, {useState} from "react";
import SimpleHeader from "../../../components/Headers/SimpleHeader";
import {Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Row} from "reactstrap";
import {handleDropItem, menuSave, search} from "./authority";
import Drop from "./drop";

export default function Authority() {

  const [alert, setAlert] = useState(null)
  const [searchInfo, setSearchInfo] = useState({
    id: '',
    name: '',
    dept: '',
  });
  const [useAuthority, setUseAuthority] = useState([])
  const [unUseAuthority, setUnUseAuthority] = useState([])

  const menu = [
    {
      name: '저장', fun: () => {
        menuSave(searchInfo, useAuthority, setAlert);
      }
    },
  ]

  return (
      <>
        {alert}
        <SimpleHeader name="권한부여" parentName="권한" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <Col lg="4">
              <div className="card-wrapper">
                <Card>
                  <CardHeader>
                    <h3 className="mb-0">직원정보</h3>
                  </CardHeader>
                  <CardBody>
                    <FormGroup>
                      <label className="form-control-label">사번 or 이름</label>
                      <span className="small">(중복 이름은 사번 상 가장 높은 직원이 조회 됩니다.)</span>
                      <Input type="text" maxLength={6}
                             onChange={(e) => search(e, setSearchInfo, setUseAuthority, setUnUseAuthority, setAlert)}/>
                    </FormGroup>
                    <Row className="py-3 align-items-center">
                      <Col sm="3">
                        <small className="text-uppercase text-muted font-weight-bold">
                          사번
                        </small>
                      </Col>
                      <Col sm="9">
                        <h3 className="heading-title text-info mb-0">
                          {searchInfo.id}
                        </h3>
                      </Col>
                    </Row>
                    <Row className="py-3 align-items-center">
                      <Col sm="3">
                        <small className="text-uppercase text-muted font-weight-bold">
                          부서
                        </small>
                      </Col>
                      <Col sm="9">
                        <h3 className="heading-title text-info mb-0">
                          {searchInfo.dept}
                        </h3>
                      </Col>
                    </Row>
                    <Row className="py-3 align-items-center">
                      <Col sm="3">
                        <small className="text-uppercase text-muted font-weight-bold">
                          이름
                        </small>
                      </Col>
                      <Col sm="9">
                        <h3 className="heading-title text-info mb-0">
                          {searchInfo.name}
                        </h3>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col lg="4">
              <div className="card-wrapper">
                <Card>
                  <CardHeader>
                    <h3 className="mb-0">미 적용</h3>
                  </CardHeader>
                  <CardBody>
                    <Drop
                        items={unUseAuthority}
                        setItems={setUnUseAuthority}
                        onDropItem={(item) => handleDropItem(item, unUseAuthority, setUnUseAuthority, useAuthority, setUseAuthority)}
                    />
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col lg="4">
              <div className="card-wrapper">
                <Card>
                  <CardHeader>
                    <h3 className="mb-0">적용 중</h3>
                  </CardHeader>
                  <CardBody>
                    <Drop
                        items={useAuthority}
                        setItems={setUseAuthority}
                        onDropItem={(item) => handleDropItem(item, useAuthority, setUseAuthority, unUseAuthority, setUnUseAuthority)}
                    />
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </>

  )
}
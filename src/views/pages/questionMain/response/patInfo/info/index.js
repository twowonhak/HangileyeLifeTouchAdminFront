import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import React from "react";
import SimpleHeader from "../../../../../../components/Headers/SimpleHeader";
import AppoList from "../appoList";

export default function Info({chartNo, setIsOpenAlert, setIsOpenSearchFun, setIsOpenResResult}) {
  const menu = [
    {
      name: '환자검색(차트번호)', fun: () => {
        setIsOpenSearchFun()
      }
    },
  ]

  return (
      <>
        <SimpleHeader name="답변" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">환자 정보</h3>
                  <p className="text-sm mb-0">
                    조회 된 환자 정보 입니다.
                  </p>
                </CardHeader>
                <CardBody>
                  <Row className="py-3 align-items-center">
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        차트번호
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">{chartNo.current.chartNo}</h3>
                    </Col>
                  </Row>
                  <Row className="py-3 align-items-center">
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        성명
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">{chartNo.current.patNm}</h3>
                    </Col>
                  </Row>
                  <Row className="py-3 align-items-center">
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        성별
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">{chartNo.current.sex}</h3>
                    </Col>
                  </Row>
                  <Row className="py-3 align-items-center">
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        나이
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">{chartNo.current.age} 세</h3>
                    </Col>
                  </Row>
                  <Row className="py-3 align-items-center">
                    <Col sm="2">
                      <small className="text-uppercase text-muted font-weight-bold">
                        생년월일
                      </small>
                    </Col>
                    <Col sm="9">
                      <h3 className="heading mb-0">{chartNo.current.birth}</h3>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
          {
            <AppoList chartNo={chartNo} setIsOpenAlert={setIsOpenAlert} setIsOpenResResult={setIsOpenResResult}/>
          }
        </Container>
      </>
  )
}
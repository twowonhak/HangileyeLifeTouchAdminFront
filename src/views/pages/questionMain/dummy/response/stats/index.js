import {Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React, {useState} from "react";
import SimpleHeader from "../../../../../../components/Headers/SimpleHeader";
import {excelExport} from "./stats";
import inputData from "../../../../../../utiles/fun/inputData";

export default function Stats() {

  const [search, setSearch] = useState({searchStart: '', searchEnd : ''})
  const [alert, setAlert] = useState(null);

  const onInputData = (e) => {
    inputData(e, search, setSearch)
  }

  return (
      <>
        {alert}
        <SimpleHeader name="문진 결과 통계" parentName="문진표" menu={[]}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">환자 검색</h3>
                  <p className="text-sm mb-0">
                    차트번호를 입력 해주세요.
                  </p>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup className="row">
                      <Label
                          className="form-control-label"
                          htmlFor="example-date-input"
                          md="2"
                      >
                        시작 일자
                      </Label>
                      <Col md="10">
                        <Input
                            id="example-date-input"
                            type="date"
                            onChange={onInputData}
                            name="searchStart"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label
                          className="form-control-label"
                          htmlFor="example-date-input"
                          md="2"
                      >
                        종료 일자
                      </Label>
                      <Col md="10">
                        <Input
                            id="example-date-input"
                            type="date"
                            name="searchEnd"
                            onChange={onInputData}
                        />
                      </Col>
                    </FormGroup>
                    <Button
                        color="info"
                        type="button"
                        onClick={() => excelExport(search, setAlert)}
                    >
                      엑셀 파일 다운로드
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
  )
}

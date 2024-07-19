import {Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React, {useState} from "react";
import SimpleHeader from "../../../../../../components/Headers/SimpleHeader";
import {chartSearchFun} from "./chartSearch";
import inputOnlyNumber from "../../../../../../utiles/fun/inputOnlyNumber";

export default function ChartSearch({chartNo, setAlert, setIsOpenResultFun}) {


  const [chartSearch, setChartSearch] = useState({chartNo: ''})

  const onInputData = (e) => {
    inputOnlyNumber(e, chartSearch, setChartSearch)
  }

  return (
      <>
        <SimpleHeader name="답변" parentName="문진표" menu={[]}/>
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
                    <FormGroup>
                      <Label className="form-control-label">차트번호</Label>
                      <Input
                          placeholder="앞자리 '0' 제외 가능"
                          type="text"
                          maxLength={8}
                          name={"chartNo"}
                          onChange={onInputData}
                      />
                    </FormGroup>
                    <Button
                        color="info"
                        type="button"
                        onClick={() => chartSearchFun(chartSearch, chartNo, setAlert, setIsOpenResultFun)}
                    >
                      검색
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

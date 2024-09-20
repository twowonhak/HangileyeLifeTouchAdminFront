import {Button, Card, CardBody, CardHeader, Col, Container, Input, Row, Table} from "reactstrap";
import React, {useEffect, useState} from "react";
import SimpleHeader from "../../../../components/Headers/SimpleHeader";
import {excelExport, listSelect} from "./state";
import inputData from "../../../../utiles/fun/inputData";
import {inputDateDefault} from "../../../../utiles/fun/inputDateDefault";

export default function State() {

  const [stock, setStock] = useState({
        assetMain: [],
        assetSub: [],
      }
  );

  const [data, setData] = useState({
    searchStart: inputDateDefault(),
    searchEnd: inputDateDefault()
  })

  useEffect(() => {
    listSelect(data, setStock)
  }, [data])

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  return (
      <>
        <SimpleHeader name="재고관리" parentName="상태" menu={null}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">상태</h3>
                  <p className="text-sm mb-0">
                    업데이트 일자 기준으로 상태에 따른 갯수 목록
                  </p>
                </CardHeader>
                <CardBody className="d-flex justify-content-between align-items-center">
                  <div>
                    <label className="mr-3">
                      시작:
                      <Input
                          className="form-control-sm ml-2"
                          id="example-date-input"
                          type="date"
                          name={"searchStart"}
                          onChange={onInputData}
                          value={data.searchStart || ''}
                      />
                    </label>
                    <label className="mr-3">
                      종료:
                      <Input
                          className="form-control-sm ml-2"
                          id="example-date-input"
                          type="date"
                          name={"searchEnd"}
                          onChange={onInputData}
                          value={data.searchEnd || ''}
                      />
                    </label>
                  </div>
                  <Button
                      color="info"
                      type="button"
                      onClick={() => excelExport(data)}
                  >
                    엑셀 파일 다운로드
                  </Button>
                </CardBody>

              </Card>
            </div>
          </Row>
          {
            stock.assetMain.map((mValue, index) =>
                <Row key={index}>
                  <div className="col">
                    <Row>
                      <Col>
                        <Card>
                          <CardHeader className="border-0">
                            <Row className="align-items-center">
                              <div className="col">
                                <h3 className="mb-0">{mValue.assMainNm}</h3>
                              </div>
                            </Row>
                          </CardHeader>
                          <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                            <tr>
                              <th scope="col" className="w-25">품목</th>
                              <th scope="col">입고 or 안전재고 (미사용)</th>
                              <th scope="col">사용</th>
                              <th scope="col">폐기 대기</th>
                              <th scope="col">폐기 완료</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                              stock.assetSub.map((sValue, index) => {
                                    if (mValue.assMainKey === sValue.assMainKey) {
                                      return (
                                          <tr key={index}>
                                            <th scope="row">{sValue.assSubNm}</th>
                                            <td className={sValue.no !== "0" ? "text-red font-weight-bold" : ""}>{sValue.no}</td>
                                            <td className={sValue.use !== "0" ? "text-red font-weight-bold" : ""}>{sValue.use}</td>
                                            <td className={sValue.wait !== "0" ? "text-red font-weight-bold" : ""}>{sValue.wait}</td>
                                            <td className={sValue.del !== "0" ? "text-red font-weight-bold" : ""}>{sValue.del}</td>
                                          </tr>
                                      )
                                    }
                                  }
                              )
                            }
                            </tbody>
                          </Table>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </Row>
            )
          }

        </Container>
      </>
  )
}
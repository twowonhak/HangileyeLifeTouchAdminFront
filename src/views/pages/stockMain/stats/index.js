import {Card, CardHeader, Col, Container, Row, Table} from "reactstrap";
import React, {useEffect, useState} from "react";
import SimpleHeader from "../../../../components/Headers/SimpleHeader";
import {listSelect} from "./stats";

export default function Stats() {

  const [stock, setStock] = useState({assetMain: [], assetSub: []});
  const [license, setLicense] = useState({dis: [], doc: []});

  console.log(stock)
  console.log(license)

  useEffect(() => {
    listSelect(setStock, setLicense)
  }, [])

  return (
      <>
        <SimpleHeader name="재고관리" parentName="재고 파악" menu={null}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">재고 파악</h3>
                  <p className="text-sm mb-0">
                    현재 등록 되어 있는 코드 별 재고 파악 입니다.
                  </p>
                </CardHeader>
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
                              <th scope="col">총 수량</th>
                              <th scope="col">사용중</th>
                              <th scope="col">안전 재고</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                              stock.assetSub.map((sValue, index) => {
                                    if (mValue.assMainKey === sValue.assMainKey) {
                                      return (
                                          <tr key={index}>
                                            <th scope="row">{sValue.assSubNm}</th>
                                            <td>{sValue.totalCount}</td>
                                            <td>{sValue.useCount}</td>
                                            <td className="text-red font-weight-bold">{sValue.notUseCount}</td>
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
          <Row>
            <div className="col">
              <Row>
                <Col>
                  <Card>
                    <CardHeader className="border-0">
                      <Row className="align-items-center">
                        <div className="col">
                          <h3 className="mb-0">프로그램 - 라이센스</h3>
                        </div>
                      </Row>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                      <thead className="thead-light">
                      <tr>
                        <th scope="col" className="w-25">프로그램 명</th>
                        <th scope="col">총 수량</th>
                        <th scope="col">사용중</th>
                        <th scope="col">재고 수량</th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                        license.dis.map((value,index)=>
                            <tr key={index}>
                              <th scope="row">{value.codeNm}</th>
                              <td>{value.totalCount}</td>
                              <td>{value.useCount}</td>
                              <td className="text-red font-weight-bold">{value.notUseCount}</td>
                            </tr>)
                      }
                      </tbody>
                    </Table>
                  </Card>
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
            <div className="col">
              <Row>
                <Col>
                  <Card>
                    <CardHeader className="border-0">
                      <Row className="align-items-center">
                        <div className="col">
                          <h3 className="mb-0">문서 - 라이센스</h3>
                        </div>
                      </Row>
                    </CardHeader>
                    <Table className="align-items-center table-flush" responsive>
                      <thead className="thead-light">
                      <tr>
                        <th scope="col" className="w-25">프로그램 명</th>
                        <th scope="col">버전</th>
                        <th scope="col">사용 수량</th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                        license.doc.map((value,index)=>
                            <tr key={index}>
                              <th scope="row">{value.codeNm}</th>
                              <td>{value.optionNm}</td>
                              <td className="text-red font-weight-bold">{value.count}</td>
                            </tr>)
                      }
                      </tbody>
                    </Table>
                  </Card>
                </Col>
              </Row>
            </div>
          </Row>

        </Container>
      </>
  )
}
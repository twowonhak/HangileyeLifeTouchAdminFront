import {Card, CardBody, CardHeader, Col, Input, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import {select} from "./questionResult";

export default function QuestionResult({codeInfo, setAlert}) {

  const [dataList, setDataList] = useState({
    queList: [],
    exaList: []
  })

  useEffect(() => {
    select(codeInfo, setAlert, setDataList)
  }, [])

  console.log(dataList)

  return (
      <>
        {
          dataList.queList.map((queValue, index) =>
              <Card key={index}>
                <CardHeader>
                  <h3 className="mb-0">{index + 1}. {queValue.queTxt}</h3>
                  <span>{queValue.lrgCtgNm} > {queValue.midCtgNm}</span>
                </CardHeader>
                <CardBody>
                  {
                    dataList.exaList.map((exaValue, index) => {
                          if (queValue.key === exaValue.queKey) {
                            return <Row key={index} className="py-1 align-items-center">
                              <Col sm="1">
                                <small className="text-uppercase text-muted font-weight-bold">
                                  {exaValue.sort}
                                </small>
                              </Col>
                              <Col sm="9">
                                {
                                  exaValue.type === 'C'
                                      ? <h3 className="heading mb-0">{exaValue.exaTxt}</h3>
                                      : <Input
                                          className="form-control-sm"
                                          placeholder={exaValue.exaTxt}
                                          id="example-text-input"
                                          type="text"
                                      />
                                }
                              </Col>
                            </Row>
                          }

                        }
                    )
                  }
                </CardBody>
              </Card>
          )
        }
      </>
  )
}
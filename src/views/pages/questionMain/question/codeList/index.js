import {Card, CardBody, CardHeader, Col, Form, FormGroup, Label} from "reactstrap";
import {codeDetail, codeList} from "./codeList";
import React, {useEffect, useState} from "react";

export function CodeList({codeInfo, setAlert, isOpenDetailListFun}){

  let [code, setCode] = useState({
    lrgCode: [],
    midCode: [],
  })

  useEffect(() => {
    codeList(setCode, setAlert)
  }, [])

  return (
      <Card>
        <CardHeader>
          <h3 className="mb-0">코드 목록</h3>
          <p className="text-sm mb-0">
            코드에 해당 되는 질문 생성 필요 시 코드를 더블 클릭 해주세요.
          </p>
        </CardHeader>
        <CardBody>
          <Form>
            {
              code.lrgCode.map((lrgValue, index) =>
                  <FormGroup className="row" key={index}>
                    <Label className="form-control-label" htmlFor="example-text-input"
                           md="1">{lrgValue.lrgCtgNm}</Label>
                    <Col md="10">
                      <div className="d-flex">
                        {
                          code.midCode.map((midValue, index) => {
                                if (lrgValue.lrgCtgCd === midValue.lrgCtgCd)
                                  return (
                                      <div className="custom-control mr-3 mt-2 align-items-center custom-mouseHover" key={index}>
                                        <Label onDoubleClick={() => codeDetail(midValue, codeInfo, isOpenDetailListFun)}>{midValue.midCtgNm}</Label>
                                      </div>
                                  )
                              }
                          )
                        }
                      </div>
                    </Col>
                  </FormGroup>
              )
            }
          </Form>
        </CardBody>
      </Card>
  )
}
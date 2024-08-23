import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Label} from "reactstrap";
import {codeList, onSearch} from "./patientCase";
import inputData from "../../../../../utiles/fun/inputData";

export default function PatientCase({codeInfo, setAlert, isOpenQuestionFun}) {
  let [code, setCode] = useState({
    lrgCtg: [],
    midCtg: [],
  })

  const [data, setData] = useState({})

  useEffect(() => {
    codeList(setCode, setAlert)
  }, [])

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  return (
      <Card>
        <CardHeader>
          <h3 className="mb-0">환자 케이스</h3>
          <p className="text-sm mb-0">
            조회 하고자 하는 환자 타입을 설정 해주세요.
          </p>
        </CardHeader>
        <CardBody>
          <Form>
            {
              code.lrgCtg.map((lrgValue, index) =>
                  <FormGroup className="row" key={index}>
                    <Label className="form-control-label" htmlFor="example-text-input" md="1">{lrgValue.lrgCtgNm}</Label>
                    <Col md="10">
                      <div className="d-flex">
                        {
                          code.midCtg.map((midValue, index) => {
                                if (lrgValue.lrgCtgCd === midValue.lrgCtgCd && midValue.midCtgCd !== '00')
                                  return (
                                      <div className="custom-control mr-3 mt-2 align-items-center custom-mouseHover"
                                           key={index}>
                                        <input
                                            className="custom-control-input"
                                            id={`customRadio${midValue.midCtgNm}`}
                                            name={lrgValue.lrgCtgCd}
                                            type="radio"
                                            value={midValue.midCtgCd}
                                            onChange={onInputData}
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor={`customRadio${midValue.midCtgNm}`}
                                        >
                                          {midValue.midCtgNm}
                                        </label>
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
            <Button
                color="primary"
                type="button"
                onClick={() => onSearch(codeInfo, data, isOpenQuestionFun)}
            >
              검색
            </Button>
          </Form>
        </CardBody>
      </Card>
  )
}
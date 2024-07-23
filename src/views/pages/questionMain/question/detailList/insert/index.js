import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import React, {useEffect, useState} from "react";
import inputData from "../../../../../../utiles/fun/inputData";
import {onSave} from "./insert";

export default function Insert({info, codeInfo, setAlert, SubMenu, isOpenListFun}){

  const [data, setData] = useState({...codeInfo.current})

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">질문 등록</h3>
            <div className="d-flex justify-content-between">
              <p className="text-sm mb-0">
                {codeInfo.current.lrgCtgNm} > {codeInfo.current.midCtgNm} 에 등록 하고자 질문을 입력 해주세요.
              </p>
              {
                SubMenu
                    ? SubMenu
                    : null
              }
            </div>
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  질문 내용
                </Label>
                <Col md="10">
                  <Input
                      placeholder="최대 60자"
                      id="example-text-input"
                      type="text"
                      maxLength={120}
                      name={"queTxt"}
                      onChange={onInputData}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-date-input"
                    md="1"
                >
                  적용기간 - 시작
                </Label>
                <Col md="10">
                  <Input
                      id="example-date-input"
                      type="date"
                      name={"useStrDat"}
                      onChange={onInputData}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-date-input"
                    md="1"
                >
                  적용기간 - 마감
                </Label>
                <Col md="10">
                  <Input
                      id="example-date-input"
                      type="date"
                      name={"useEndDat"}
                      onChange={onInputData}
                  />
                </Col>
                <div className="custom-control ml-8">
                  적용기간 미입력 및 삭제 시 적용기간 상관 없음 ( 0000-00-00 ~ 9999-99-99 )
                </div>
              </FormGroup>
              <Button
                  color="primary"
                  type="button"
                  onClick={()=> onSave(data, setAlert, isOpenListFun)}
              >
                등록
              </Button>
            </Form>
          </CardBody>
        </Card>
      </>
  )
}
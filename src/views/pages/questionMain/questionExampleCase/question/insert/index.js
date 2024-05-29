import React, {memo, useState} from "react";
import {onSave} from "./insert";
import inputData from "../../../../../../utiles/input/inputData";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";

export default memo(function QuestionInsert({setIsOpenMainFun}) {

  const [data, setData] = useState({})

  const [alert, setAlert] = useState(null);

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  return (
      <>
        {alert}
        <Card>
          <CardHeader>
            <h3 className="mb-0">질문 생성</h3>
            <p className="text-sm mb-0">
              생성 하시고자 하는 질문을 생성 해주세요.
            </p>
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
                      placeholder="최대 60자 입니다."
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
                <div className="custom-control ml-7">
                  적용기간 미 선택 시 적용기간 상관 없음
                </div>
              </FormGroup>
              <Button
                  color="primary"
                  type="button"
                  onClick={() => onSave(data, setIsOpenMainFun, setAlert)}
              >
                생성
              </Button>
            </Form>
          </CardBody>
        </Card>
      </>
  )
})

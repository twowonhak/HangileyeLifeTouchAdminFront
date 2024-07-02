import React, {memo, useState} from "react";
import {onSave} from "./insert";
import inputData from "../../../../../../utiles/fun/inputData";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {useNavigate} from "react-router-dom";

export default memo(function QuestionInsert({setIsOpenMainFun}) {

  const [data, setData] = useState({
    content : '',
    useStrDat : '',
    useEndDat : ''
  })

  const [alert, setAlert] = useState(null);

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  return (
      <>
        {alert}
        <Card>
          <CardHeader>
            <h3 className="mb-0">질문 등록</h3>
            <p className="text-sm mb-0">
              등록 하시고자 하는 질문을 등록 해주세요.
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
                      placeholder="최대 60자"
                      id="example-text-input"
                      type="text"
                      maxLength={120}
                      name={"content"}
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
                  적용기간 삭제 시 적용기간 상관 없음
                </div>
              </FormGroup>
              <Button
                  color="primary"
                  type="button"
                  onClick={() => onSave(data, setIsOpenMainFun, setAlert)}
              >
                등록
              </Button>
            </Form>
          </CardBody>
        </Card>
      </>
  )
})

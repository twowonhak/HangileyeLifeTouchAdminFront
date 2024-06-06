import React, {memo, useState} from "react";
import inputData from "../../../../../../utiles/fun/inputData";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {onSave} from "./insert";
import {useNavigate} from "react-router-dom";

export default memo(function ExampleInsert({setIsOpenListFun,queKey}) {


  const [data, setData] = useState({
    queKey: queKey || '',
    content : "",
    type : "C"
  })

  const [alert, setAlert] = useState(null);
  const navigate = useNavigate ();

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  return (
      <>
        {alert}
        <Card>
          <CardHeader>
            <h3 className="mb-0">보기 등록</h3>
            <p className="text-sm mb-0">
              위 질문에 해당 되는 보기를 생성 해주세요.
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
                  보기 내용
                </Label>
                <Col md="10">
                  <Input
                      placeholder="최대 30자 입니다."
                      id="example-text-input"
                      type="text"
                      maxLength={60}
                      name={"content"}
                      onChange={onInputData}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  보기 타입
                </Label>
                <Col md="10">
                  <div className="custom-control custom-radio mb-3">
                    <input
                        className="custom-control-input"
                        id="customRadioC"
                        name="type"
                        type="radio"
                        value="C"
                        defaultChecked={true}
                        onChange={onInputData}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customRadioC"
                    >
                      체크박스
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-3">
                    <input
                        className="custom-control-input"
                        id="customRadioT"
                        name="type"
                        type="radio"
                        value="T"
                        onChange={onInputData}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customRadioT"
                    >
                      프리 텍스트
                    </label>
                  </div>
                </Col>
              </FormGroup>
              <Button
                  color="primary"
                  type="button"
                  onClick={() => onSave(data, setIsOpenListFun, setAlert, navigate)}
              >
                등록
              </Button>
            </Form>
          </CardBody>
        </Card>
      </>
  )
})

import React, {memo, useState} from "react";
import {onSave} from "./insert";
import inputData from "../../../../../../utiles/fun/inputData";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {useNavigate} from "react-router-dom";

export default memo(function Insert({setIsOpenMainFun}) {

  const [data, setData] = useState({
    content: ""
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
            <h3 className="mb-0">환자 특이사항</h3>
            <p className="text-sm mb-0">
              삭제 만 가능 합니다.
            </p>
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="2"
                >
                  특이사항 명
                </Label>
                <Col md="10">
                  <Input
                      placeholder="최대 30자"
                      id="example-text-input"
                      type="text"
                      maxLength={60}
                      name={"content"}
                      onChange={onInputData}
                  />
                </Col>
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
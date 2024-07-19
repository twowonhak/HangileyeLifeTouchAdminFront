import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import React, {useState} from "react";
import inputData from "../../../../../../utiles/fun/inputData";
import {onSave} from "./insert";

export default function Insert({setAlert, isOpenListFun}) {

  const [data, setData] = useState({
    lrgCtgNm : '',
  })

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">대 분류 등록</h3>
            <p className="text-sm mb-0">
              등록 하시고자 하는 대 분류 작성 해주세요.
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
                  대 분류명
                </Label>
                <Col md="10">
                  <Input
                      placeholder="최대 10자"
                      id="example-text-input"
                      type="text"
                      maxLength={10}
                      name={"lrgCtgNm"}
                      onChange={onInputData}
                  />
                </Col>
              </FormGroup>
              <Button
                  color="primary"
                  type="button"
                  onClick={() => onSave(data, isOpenListFun, setAlert)}
              >
                등록
              </Button>
            </Form>
          </CardBody>
        </Card>
      </>
  )
}
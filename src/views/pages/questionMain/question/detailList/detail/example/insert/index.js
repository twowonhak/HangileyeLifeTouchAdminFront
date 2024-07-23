import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import React, {useState} from "react";
import inputData from "../../../../../../../../utiles/fun/inputData";
import {onSave} from "./insert";

export default function Insert({info, SubMenu, setAlert, isOpenListFun}) {

  const [data, setData] = useState({queKey: info.current, type: 'C', exaTxt: ''})

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">보기 등록</h3>
            <div className="d-flex justify-content-between">
              <p className="text-sm mb-0">
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
                  보기 내용
                </Label>
                <Col md="10">
                  <Input
                      placeholder="최대 60자"
                      id="example-text-input"
                      type="text"
                      maxLength={120}
                      name={"exaTxt"}
                      onChange={onInputData}
                      value={data.exaTxt || ''}
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
                      텍스트
                    </label>
                  </div>
                </Col>
              </FormGroup>
              <Button
                  color="primary"
                  type="button"
                  onClick={() => onSave(data, setAlert, isOpenListFun)}
                  size={'sm'}
                  outline
              >
                등록
              </Button>
            </Form>
          </CardBody>
        </Card>
      </>
  )
}
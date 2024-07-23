import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import React, {useEffect, useState} from "react";
import NotificationAlert from "../../../../../../components/Alert/Modals/Notification";
import inputData from "../../../../../../../../utiles/fun/inputData";
import {detail, onDelete, onUpdate} from "./detail";

export default function Detail({info, setAlert, SubMenu, isOpenListFun}){

  const [data, setData] = useState({
    key: info.current,
    exaTxt: '',
    type: ''
  })

  useEffect(() => {
    detail(data, setData, setAlert)
  }, [])

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const deleteAlert = () => {
    setAlert(
        <NotificationAlert type={"danger"} setIsModalOpen={setAlert} title={"삭제"} contents={"해당 정보를 삭제 하시겠습니까?"} onClickFun={() => onDelete(info, setAlert, isOpenListFun)}/>
    )
  };

  const updateAlert = (e) => {
    setAlert(
        <NotificationAlert type={"primary"} setIsModalOpen={setAlert} title={"수정"} contents={"해당 정보를 수정 하시겠습니까?"} onClickFun={() => onUpdate(data, setAlert)}/>
    )
  };

  return(
      <Card>
        <CardHeader>
          <h3 className="mb-0">보기 상세</h3>
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
                      onChange={onInputData}
                      checked={data.type === 'C' || ''}
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
                      checked={data.type === 'T' || ''}
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
                color="warning"
                type="button"
                onClick={updateAlert}
                size={'sm'}
                outline
            >
              수정
            </Button>
            <Button
                color="danger"
                type="button"
                onClick={deleteAlert}
                size={'sm'}
                outline
            >
              삭제
            </Button>
          </Form>
        </CardBody>
      </Card>
  )
}
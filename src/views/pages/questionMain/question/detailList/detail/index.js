import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import inputData from "../../../../../../utiles/fun/inputData";
import {detail, onDelete, onUpdate} from "./detail";
import NotificationAlert from "../../../../components/Alert/Modals/Notification";
import Example from "./example";

export default function Detail({info, codeInfo, setAlert, SubMenu, isOpenListFun}){

  const [data, setData] = useState({})

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  useEffect(()=>{
    detail(info, setAlert, setData)
  },[])

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

  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">질문 상세</h3>
            <div className="d-flex justify-content-between">
              <p className="text-sm mb-0">
                {codeInfo.current.lrgCtgNm} > {codeInfo.current.midCtgNm} 질문 상세 입니다.
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
                      value={data.queTxt || ''}
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
                      value={data.useStrDat || ''}
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
                      value={data.useEndDat || ''}
                  />
                </Col>
                <div className="custom-control ml-8">
                  적용기간 미입력 및 삭제 시 적용기간 상관 없음 ( 0000-00-00 ~ 9999-99-99 )
                </div>
              </FormGroup>
              <Button
                  color="danger"
                  type="button"
                  onClick={deleteAlert}
              >
                삭제
              </Button>
              <Button
                  color="warning"
                  type="button"
                  onClick={updateAlert}
              >
                수정
              </Button>
            </Form>
          </CardBody>
        </Card>
        <Row>
          <div className="col">
            <Example info={info} setAlert={setAlert}/>
          </div>
        </Row>
      </>
  )
}
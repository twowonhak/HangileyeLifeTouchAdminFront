import React, {memo, useEffect, useState} from "react";
import useDidMountEffect from "../../../../../../hook/useDidMountEffect";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import inputData from "../../../../../../utiles/input/inputData";
import NotificationAlert from "../../../../components/Alert/Modals/Notification";
import {detail, onDelete} from "./detail";

export default memo(function Detail({info, setIsOpenMainFun}) {

  const [data, setData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isNotificationAlertOpen, setIsNotificationAlertOpen] = useState(null);

  useEffect(() => {
    detail(info, setData)
  }, [])

  useDidMountEffect(() => {
    setIsModalOpen(null)
  }, [isAlertOpen])

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const deleteAlert = () => {
    setIsNotificationAlertOpen(
        <NotificationAlert type={"danger"} isModalOpen={isModalOpen} setIsModalOpen={setIsNotificationAlertOpen} title={"삭제"} contents={"해당 정보를 삭제 하시겠습니까?"} onClickFun={() => onDelete(info, setIsOpenMainFun, setIsAlertOpen)}/>
    )
  };

  return (
      <>
        {isAlertOpen}
        {isNotificationAlertOpen}
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
                      placeholder="최대 30자 입니다."
                      id="example-text-input"
                      type="text"
                      maxLength={60}
                      name={"content"}
                      onChange={onInputData}
                      defaultValue={data.content}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="2"
                >
                  생성자
                </Label>
                <Col md="10">
                  <Input
                      id="example-text-input"
                      type="text"
                      readOnly={true}
                      defaultValue={data.crUserNm}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="2"
                >
                  생성일시
                </Label>
                <Col md="10">
                  <Input
                      id="example-text-input"
                      type="text"
                      readOnly={true}
                      defaultValue={data.crDtime}
                  />
                </Col>
              </FormGroup>
              <Button
                  color="danger"
                  type="button"
                  onClick={deleteAlert}
              >
                삭제
              </Button>
            </Form>
          </CardBody>
        </Card>
      </>
  )
})
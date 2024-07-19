import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import NotificationAlert from "../../../../../../components/Alert/Modals/Notification";
import {detailSelect, onDelete, onUpdate} from "./detail";
import inputData from "../../../../../../../../utiles/fun/inputData";

export default function MidDetail({info, setAlert, search, mainIsOpenListFun}) {

  const [data, setData] = useState("")

  useEffect(()=>{
    detailSelect(info, setData, setAlert)
  },[])

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const deleteAlert = () => {
    setAlert(
        <NotificationAlert type={"danger"} setIsModalOpen={setAlert}
                           title={"삭제"} contents={`해당 정보를 삭제 하시겠습니까?`}
                           onClickFun={() => onDelete(data, setAlert, mainIsOpenListFun)}/>
    )
  };

  const updateAlert = () => {
    setAlert(
        <NotificationAlert type={"primary"} setIsModalOpen={setAlert}
                           title={"수정"} contents={"해당 정보를 수정 하시겠습니까?"}
                           onClickFun={() => onUpdate(data, setAlert)}/>
    )
  };

  return (
      <Row>
        <div className="col">
          <Card>
            <CardHeader>
              <h3 className="mb-0">중 분류 정보</h3>
              <div className="d-flex justify-content-between">
              <p className="text-sm mb-0">

              </p>
              {search}
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
                    중 분류 명
                  </Label>
                  <Col md="10">
                    <Input
                        placeholder="최대 10자"
                        id="example-text-input"
                        type="text"
                        name="midCtgNm"
                        value={data.midCtgNm || ''}
                        onChange={onInputData}
                    />
                  </Col>
                </FormGroup>
                <Button
                    color="danger"
                    type="button"
                    size={'sm'}
                    outline
                    onClick={deleteAlert}
                >
                  삭제
                </Button>
                <Button
                    color="warning"
                    type="button"
                    size={'sm'}
                    outline
                    onClick={updateAlert}
                >
                  수정
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </Row>
  )
}
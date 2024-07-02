import React, {memo, useEffect, useState} from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {detail, onDelete} from "./detail";
import {useNavigate} from "react-router-dom";
import NotificationAlert from "../../../../components/Alert/Modals/Notification";

export default memo(function ExampleDetail({info, setIsOpenListFun}) {

  const [data, setData] = useState({
    content:'',
    type:''
  })
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    detail(info, setData, setAlert)
  }, [])

  const deleteAlert = () => {
    setAlert(
        <NotificationAlert type={"danger"} setIsModalOpen={setAlert} title={"삭제"} contents={"해당 정보를 삭제 하시겠습니까?"} onClickFun={() => onDelete(data, setAlert, setIsOpenListFun)}/>
    )
  };

  return (
      <>
        {alert}
        <Card>
          <CardHeader>
            <h3 className="mb-0">보기 상세</h3>
            <p className="text-sm mb-0">
              해당 정보를 수정 및 삭제 하실 수 있습니다.
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
                      placeholder="최대 30자"
                      id="example-text-input"
                      type="text"
                      maxLength={60}
                      name={"content"}
                      defaultValue={data.content || ''}
                      readOnly={true}
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
                        checked={data.type === 'C' || ''}
                        readOnly={true}
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
                        checked={data.type === 'T' || ''}
                        readOnly={true}
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
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  등록자
                </Label>
                <Col md="10">
                  <Input
                      id="example-text-input"
                      type="text"
                      readOnly={true}
                      value={data.crUserNm || ''}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  등록일시
                </Label>
                <Col md="10">
                  <Input
                      id="example-text-input"
                      type="text"
                      readOnly={true}
                      value={data.crDtime || ''}
                  />
                </Col>
              </FormGroup>
              {/*<FormGroup className="row">*/}
              {/*  <Label*/}
              {/*      className="form-control-label"*/}
              {/*      htmlFor="example-text-input"*/}
              {/*      md="1"*/}
              {/*  >*/}
              {/*    최종 수정자*/}
              {/*  </Label>*/}
              {/*  <Col md="10">*/}
              {/*    <Input*/}
              {/*        id="example-text-input"*/}
              {/*        type="text"*/}
              {/*        readOnly={true}*/}
              {/*        value={data.upUserNm || ''}*/}
              {/*    />*/}
              {/*  </Col>*/}
              {/*</FormGroup>*/}
              {/*<FormGroup className="row">*/}
              {/*  <Label*/}
              {/*      className="form-control-label"*/}
              {/*      htmlFor="example-text-input"*/}
              {/*      md="1"*/}
              {/*  >*/}
              {/*    최종 수정 일시*/}
              {/*  </Label>*/}
              {/*  <Col md="10">*/}
              {/*    <Input*/}
              {/*        id="example-text-input"*/}
              {/*        type="text"*/}
              {/*        readOnly={true}*/}
              {/*        value={data.upDtime || ''}*/}
              {/*    />*/}
              {/*  </Col>*/}
              {/*</FormGroup>*/}
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

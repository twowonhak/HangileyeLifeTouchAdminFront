import React, {memo, useEffect, useState} from "react";
import useDidMountEffect from "../../../../../../hook/useDidMountEffect";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {birth, pagtTy, sex, type} from "../../../../../../variables/question/patient";
import inputData from "../../../../../../utiles/fun/inputData";
import inputCheck from "../../../../../../utiles/fun/inputCheck";
import {detail, onDelete, onUpdate} from "./detail";
import NotificationAlert from "../../../../components/Alert/Modals/Notification";
import {diagListSelect, specialNoteListSelect} from "../insert/insert";
import {useNavigate} from "react-router-dom";

export default memo(function Detail({info, setIsOpenMainFun}) {


  const [data, setData] = useState({});
  const [diagList, setDiagList] = useState([]);
  const [specialNoteList, setSpecialNoteList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isNotificationAlertOpen, setIsNotificationAlertOpen] = useState(null);
  const navigate = useNavigate ();
  let checked

  useEffect(() => {
    detail({key: info.current.key}, setData, setIsOpenAlert)
    // 진료과 조회
    diagListSelect(setDiagList)
    // 특이사항 조회
    specialNoteListSelect(setSpecialNoteList)
  }, [isOpenAlert])

  useDidMountEffect(() => {
    setIsModalOpen(null)
  }, [])

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const handleChange = (e) => {
    inputCheck(e, data, setData)
  };

  const deleteAlert = () => {
    setIsNotificationAlertOpen(
        <NotificationAlert type={"danger"} isModalOpen={isModalOpen} setIsModalOpen={setIsNotificationAlertOpen} title={"삭제"} contents={"해당 정보를 삭제 하시겠습니까?"} onClickFun={() => onDelete(info, setIsOpenMainFun, setIsOpenAlert, navigate)}/>
    )
  };

  const updateAlert = (e) => {
    setIsNotificationAlertOpen(
        <NotificationAlert type={"primary"} isModalOpen={isModalOpen} setIsModalOpen={setIsNotificationAlertOpen} title={"수정"} contents={"해당 정보를 수정 하시겠습니까?"} onClickFun={() => onUpdate(data, setIsOpenAlert, setIsNotificationAlertOpen, navigate)}/>
    )
  };


  return (
      <>
        {isOpenAlert}
        {isNotificationAlertOpen}
        <Card>
          <CardHeader>
            <h3 className="mb-0">환자 케이스 정보</h3>
            <p className="text-sm mb-0">
              적용기간 만 수정이 가능 합니다.
            </p>
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup className="row">
                <Label className="form-control-label" htmlFor="example-text-input" md="1">진료 타입</Label>
                <Col md="10">
                  <div className="d-flex">
                    {
                      type.map((value, index) => {
                        if (data.type !== undefined && data.type === value.value) {
                          checked = true
                        } else checked = false

                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" checked={checked} id={value.name + index}
                                     disabled={true}
                                     type="checkbox" name={value.name} value={value.value}/>
                              <Label className="custom-control-label" htmlFor={value.name + index}>{value.title}</Label>
                            </div>
                        )
                      })
                    }
                  </div>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="form-control-label" htmlFor="example-text-input" md="1">진료 타입</Label>
                <Col md="10">
                  <div className="d-flex">
                    {
                      diagList.map((value, index) => {

                        if (data.diagCd !== undefined && data.diagCd === value.diagCd) {
                          checked = true
                        } else checked = false

                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" checked={checked} id={"diagCd" + index}
                                     type="checkbox" disabled={true}
                                     name={"diagCd"} value={value.diagCd}/>
                              <Label className="custom-control-label" htmlFor={"diagCd" + index}>{value.diag}</Label>
                            </div>
                        )
                      })
                    }
                  </div>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="form-control-label" htmlFor="example-text-input" md="1">생년월일</Label>
                <Col md="10">
                  <div className="d-flex">
                    {
                      birth.map((value, index) => {
                        if (data.birth !== undefined && data.birth === value.value) {
                          checked = true
                        } else checked = false
                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" checked={checked} id={value.name + index}
                                     type="checkbox" disabled={true}
                                     name={value.name} value={value.value}/>
                              <Label className="custom-control-label" htmlFor={value.name + index}>{value.title}</Label>
                            </div>
                        )
                      })
                    }
                  </div>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="form-control-label" htmlFor="example-text-input" md="1">성별</Label>
                <Col md="10">
                  <div className="d-flex">
                    {
                      sex.map((value, index) => {
                        if (data.sex !== undefined && data.sex === value.value) {
                          checked = true
                        } else checked = false
                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" checked={checked} id={value.name + index}
                                     type="checkbox" disabled={true}
                                     name={value.name} value={value.value} onChange={handleChange}/>
                              <Label className="custom-control-label" htmlFor={value.name + index}>{value.title}</Label>
                            </div>
                        )
                      })
                    }
                  </div>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="form-control-label" htmlFor="example-text-input" md="1">임신여부</Label>
                <Col md="10">
                  <div className="d-flex">
                    <div className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                      <Input className="custom-control-input" id={"preYn"} type="checkbox"
                             name={"preYn"}
                             checked={data.preYn}
                             value={"Y"}
                             disabled={true}
                             onChange={handleChange}/>
                      <Label className="custom-control-label" htmlFor={"preYn"}>임신중</Label>
                    </div>
                  </div>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="form-control-label" htmlFor="example-text-input" md="1">과거력</Label>
                <Col md="10">
                  <div className="d-flex">
                    {
                      pagtTy.map((value, index) => {
                        if (data.pagtTy !== undefined && data.pagtTy === value.value) {
                          checked = true
                        } else checked = false
                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" checked={checked} id={value.name + index}
                                     type="checkbox" disabled={true}
                                     name={value.name} value={value.value} onChange={handleChange}/>
                              <Label className="custom-control-label" htmlFor={value.name + index}>{value.title}</Label>
                            </div>
                        )
                      })
                    }
                  </div>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="form-control-label" htmlFor="example-text-input" md="1">직업타입</Label>
                <Col md="10">
                  <div className="d-flex">
                  </div>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label className="form-control-label" htmlFor="example-text-input" md="1">특이사항</Label>
                <Col md="10">
                  <div className="d-flex">
                    {
                      specialNoteList.map((value, index) => {
                        if (data.specialNote !== null && data.specialNote === value.key) {
                          checked = true
                        } else checked = false
                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" checked={checked} id={"specialNote" + index}
                                     type="checkbox" disabled={true}
                                     name={"specialNote"} value={value.key} onChange={handleChange}/>
                              <Label className="custom-control-label"
                                     htmlFor={"specialNote" + index}>{value.content}</Label>
                            </div>
                        )
                      })
                    }
                  </div>
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
                      value={data.useStrDat}
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
                      value={data.useEndDat}
                      onChange={onInputData}
                  />
                </Col>
                <div className="custom-control ml-7">
                  적용기간 미 선택 시 적용기간 상관 없음
                </div>
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
                      value={data.crUserId}
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
                      value={data.crDtime}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  최종 수정자
                </Label>
                <Col md="10">
                  <Input
                      id="example-text-input"
                      type="text"
                      readOnly={true}
                      value={data.upUserNm}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  최종 수정 일시
                </Label>
                <Col md="10">
                  <Input
                      id="example-text-input"
                      type="text"
                      readOnly={true}
                      value={data.upDtime}
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
      </>
  )
})
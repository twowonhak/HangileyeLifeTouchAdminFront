import React, {memo, useEffect, useState} from "react";
import {diagListSelect, onSave, specialNoteListSelect} from "./insert";
import inputData from "../../../../../../utiles/fun/inputData";
import inputCheck from "../../../../../../utiles/fun/inputCheck";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {birth, pagtTy, sex, type} from "variables/question/patient";
import {useNavigate} from "react-router-dom";

export default memo(function Insert({setIsOpenMainFun}) {

  const [data, setData] = useState({
    type: "",
    diagCd: "",
    sex: "",
    birth: "",
    preYn: "",
    jobTy: "",
    pagtTy: "",
    specialNote: "",
    useStrDat: "",
    useEndDat: ""
  })

  const [diagList, setDiagList] = useState([]);
  const [specialNoteList, setSpecialNoteList] = useState([]);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate ();

  useEffect(() => {
    // 진료과 조회
    diagListSelect(setDiagList)
    // 특이사항 조회
    specialNoteListSelect(setSpecialNoteList)
  }, [])

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const handleChange = (e) => {
    inputCheck(e, data, setData)
  };


  return (
      <>
        {alert}
        <Card>
          <CardHeader>
            <h3 className="mb-0">환자 케이스 등록</h3>
            <p className="text-sm mb-0">
              등록 하시고자 하는 환자 케이스를 등록 해주세요.
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
                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" id={value.name + index} type="checkbox" name={value.name} value={value.value} onChange={handleChange}/>
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
                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" id={"diagCd" + index} type="checkbox" name={"diagCd"} value={value.diagCd} onChange={handleChange}/>
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
                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" id={value.name + index} type="checkbox" name={value.name} value={value.value} onChange={handleChange}/>
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
                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" id={value.name + index} type="checkbox" name={value.name} value={value.value} onChange={handleChange}/>
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
                      <Input className="custom-control-input" id={"preYn"} type="checkbox" name={"preYn"} value={"Y"} onChange={handleChange}/>
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
                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" id={value.name + index} type="checkbox" name={value.name} value={value.value} onChange={handleChange}/>
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
                        return (
                            <div key={index} className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                              <Input className="custom-control-input" id={"specialNote" + index} type="checkbox" name={"specialNote"} value={value.key} onChange={handleChange}/>
                              <Label className="custom-control-label" htmlFor={"specialNote" + index}>{value.content}</Label>
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
                      onChange={onInputData}
                  />
                </Col>
                <div className="custom-control ml-7">
                    적용기간 미 선택 시 적용기간 상관 없음
                </div>
              </FormGroup>
              <Button
                  color="primary"
                  type="button"
                  onClick={()=> onSave(data, setIsOpenMainFun, setAlert, navigate)}
              >
                등록
              </Button>
            </Form>
          </CardBody>
        </Card>
      </>
  )
})

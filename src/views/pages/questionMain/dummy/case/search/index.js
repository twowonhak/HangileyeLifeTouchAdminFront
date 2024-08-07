import React, {memo, useEffect, useRef, useState} from "react";
import {Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {birth, pagtTy, sex, type} from "variables/question/patient";
import {diagListSelect, specialNoteListSelect} from "../../patientCase/patient/insert/insert";
import inputCheck from "../../../../../../utiles/fun/inputCheck";
import inputData from "../../../../../../utiles/fun/inputData";
import SimpleHeader from "../../../../../../components/Headers/SimpleHeader";
import {caseDataList, onSearch} from "./search";
import List from "../../../../components/List";

export default memo(function Search({patInfo, onOpenFun, setAlert}) {

  const info = useRef('')
  const [data, setData] = useState({
    type: "",
    diagCd: "",
    sex: "",
    birth: "",
    preYn: "",
    pagtTy: "",
    specialNote: "",
    useStrDat: "",
    useEndDat: ""
  })
  const [dataList, setDataList] = useState([]);
  const [diagList, setDiagList] = useState([]);
  const [specialNoteList, setSpecialNoteList] = useState([]);
  const columns = [
    {
      dataField: "key",
      text: "KEY",
      sort: true,
    },
    {
      dataField: "type",
      text: "진료타입",
      sort: true,
    },
    {
      dataField: "diagCd",
      text: "진료과",
      sort: true,
    },
    {
      dataField: "sex",
      text: "성별",
      sort: true,
    },
    {
      dataField: "birth",
      text: "나이",
      sort: true,
    },
    {
      dataField: "pagtTy",
      text: "과거력",
      sort: true,
    },
    {
      dataField: "specialNote",
      text: "특이사항",
      sort: true,
    },
  ]

  useEffect(() => {
    // 진료과 조회
    diagListSelect(setDiagList)
    // 특이사항 조회
    specialNoteListSelect(setSpecialNoteList)
    caseDataList(info, setDataList, setAlert)
  }, [])

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const handleChange = (e) => {
    inputCheck(e, data, setData)

  };

  return (
      <>
        <SimpleHeader name="케이스" parentName="문진표" menu={[]}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              <Card>
                <CardHeader>
                  <h3 className="mb-0">케이스</h3>
                  <p className="text-sm mb-0">
                    조회 하시고자 하는 환자 정보를 입력 시 해당 케이스 상세 페이지 이동 됨
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
                                  <div key={index}
                                       className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                                    <Input className="custom-control-input" id={value.name + index} type="checkbox"
                                           name={value.name} value={value.value} onChange={handleChange}/>
                                    <Label className="custom-control-label"
                                           htmlFor={value.name + index}>{value.title}</Label>
                                  </div>
                              )
                            })
                          }
                        </div>
                      </Col>
                    </FormGroup>
                    <FormGroup className="row">
                      <Label className="form-control-label" htmlFor="example-text-input" md="1">진료과</Label>
                      <Col md="10">
                        <div className="d-flex">
                          {
                            diagList.map((value, index) => {
                              return (
                                  <div key={index}
                                       className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                                    <Input className="custom-control-input" id={"diagCd" + index} type="checkbox"
                                           name={"diagCd"} value={value.diagCd} onChange={handleChange}/>
                                    <Label className="custom-control-label"
                                           htmlFor={"diagCd" + index}>{value.diag}</Label>
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
                                  <div key={index}
                                       className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                                    <Input className="custom-control-input" id={value.name + index} type="checkbox"
                                           name={value.name} value={value.value} onChange={handleChange}/>
                                    <Label className="custom-control-label"
                                           htmlFor={value.name + index}>{value.title}</Label>
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
                                  <div key={index}
                                       className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                                    <Input className="custom-control-input" id={value.name + index} type="checkbox"
                                           name={value.name} value={value.value} onChange={handleChange}/>
                                    <Label className="custom-control-label"
                                           htmlFor={value.name + index}>{value.title}</Label>
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
                            <Input className="custom-control-input" id={"preYn"} type="checkbox" name={"preYn"}
                                   value={"Y"}
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
                              return (
                                  <div key={index}
                                       className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                                    <Input className="custom-control-input" id={value.name + index} type="checkbox"
                                           name={value.name} value={value.value} onChange={handleChange}/>
                                    <Label className="custom-control-label"
                                           htmlFor={value.name + index}>{value.title}</Label>
                                  </div>
                              )
                            })
                          }
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
                                  <div key={index}
                                       className="custom-control custom-checkbox mr-3 mt-2 align-items-center">
                                    <Input className="custom-control-input" id={"specialNote" + index} type="checkbox"
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
                    <Button
                        color="primary"
                        type="button"
                        onClick={() => onSearch(patInfo, data, onOpenFun, setAlert)}
                    >
                      검색
                    </Button>
                  </Form>
                </CardBody>
              </Card>
              <List dataList={dataList} type={'radio'} info={patInfo} columns={columns} title={"환자 케이스 목록"} contents={""}
                    setIsOpenDetailFun={onOpenFun}/>
            </div>
          </Row>
        </Container>
      </>
  )
})

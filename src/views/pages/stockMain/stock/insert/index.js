import inputData from "../../../../../utiles/fun/inputData";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import React, {useEffect, useState} from "react";
import {cdKeyList, onSave} from "./insert";
import {inputDateYearDefault} from "../../../../../utiles/fun/inputDateDefault";

export default function Insert({info, onOpenFun, setAlert}) {

  const [data, setData] = useState({
    assMainCd: 'PC',
    assSubCd: '01',
    buil: 'M',
    floor: '1',
    team: '',
    place: '',
    userNm: '',
    year: inputDateYearDefault(),
    ip: '',
    ms: '',
    hwp: '',
  })
  const [assData, setAssData] = useState([])
  const [cdList, setCdData] = useState({assetMain:[], assetSub:[], team:[], code: []})

  useEffect(()=>{
    // assOpList(setAssData)
    cdKeyList(setCdData)
  },[])


  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">재고</h3>
            <p className="text-sm mb-0">
              재고등록을 위해 해당 정보를 입력 해주세요.
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
                  자산 대 분류
                </Label>
                <Col md="4" sm="6">
                  <Input type="select" name={"assMainCd"} value={data.assMainCd} onChange={onInputData}>
                    {cdList.assetMain.map((value,index)=>{
                      return( <option key={index}  value={value.assMainKey}>{value.assMainNm}</option>)
                    })}
                  </Input>
                </Col>
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  자산 중 분류
                </Label>
                <Col md="5" sm="6">
                  <Input type="select" name={"assSubCd"} onChange={onInputData}>
                    {cdList.assetSub.map((value,index)=>{
                      if(data.assMainCd === value.assMainKey)
                      return( <option key={index}  value={value.assSubKey}>{value.assSubNm}</option>)
                    })}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  건물
                </Label>
                <Col md="10" className="d-flex align-items-center">
                  <div className="custom-control custom-radio mb-3 mr-3 mt-2">
                    <input
                        className="custom-control-input"
                        id="buil1"
                        name="buil"
                        type="radio"
                        value="M"
                        defaultChecked={true}
                        onChange={onInputData}
                    />
                    <label className="custom-control-label" htmlFor="buil1">
                      본관
                    </label>
                  </div>
                  <div className="custom-control custom-radio mb-3 mr-3 mt-2">
                    <input
                        className="custom-control-input"
                        id="buil2"
                        name="buil"
                        type="radio"
                        value="N"
                        onChange={onInputData}
                    />
                    <label className="custom-control-label" htmlFor="buil2">
                      신관
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
                  층
                </Label>
                <Col md="10">
                  <Input type="select" name={"floor"} onChange={onInputData} value={data.floor}>
                    <option value={"B4"}>B4</option>
                    <option value={"B3"}>B3</option>
                    <option value={"B2"}>B2</option>
                    <option value={"B1"}>B1</option>
                    <option  value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                    <option value={"5"}>5</option>
                    <option value={"6"}>6</option>
                    <option value={"7"}>7</option>
                    <option value={"8"}>8</option>
                    <option value={"9"}>9</option>
                    <option value={"10"}>10</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  부서
                </Label>
                <Col md="10">
                  <Input type="select" name={"team"} onChange={onInputData}>
                    {
                      cdList.team.map((value,index)=> <option key={index} value={value.key}>{value.name}</option>)
                    }
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  상세위치
                </Label>
                <Col md="10">
                  <Input
                      placeholder="최대 10자"
                      id="example-text-input"
                      type="text"
                      maxLength={10}
                      name={"place"}
                      onChange={onInputData}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  소유주
                </Label>
                <Col md="10">
                  <Input
                      placeholder="최대 10자"
                      id="example-text-input"
                      type="text"
                      maxLength={10}
                      name={"userNm"}
                      onChange={onInputData}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  구입년도
                </Label>
                <Col md="10">
                  <Input type="select" name={"year"} onChange={onInputData} value={data.year}>
                    <option value=""></option>
                    {
                      cdList.code.map((value,index)=> {
                        if (value.codeNm === 'YEAR')
                          return <option key={index} value={value.optionNm}>{value.optionNm}</option>
                      })
                    }
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  IP
                </Label>
                <Col md="10">
                  <Input
                      placeholder="'.' 포함 해서 작성해주세요."
                      id="example-text-input"
                      type="text"
                      maxLength={15}
                      name={"ip"}
                      onChange={onInputData}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  MS_OFFICE
                </Label>
                <Col md="10">
                  <Input type="select" name={"ms"} onChange={onInputData}>
                    <option value=""></option>
                    {
                      cdList.code.map((value,index)=> {
                        if (value.codeNm === 'MS')
                          return <option key={index} value={value.optionNm}>{value.optionNm}</option>
                      })
                    }
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  HWP
                </Label>
                <Col md="10">
                  <Input type="select" name={"hwp"} onChange={onInputData}>
                    <option value=""></option>
                    {
                      cdList.code.map((value,index)=> {
                        if (value.codeNm === 'HWP')
                          return <option key={index} value={value.optionNm}>{value.optionNm}</option>
                      })
                    }
                  </Input>
                </Col>
              </FormGroup>
              <Button
                  color="primary"
                  type="button"
                  onClick={() => onSave(data, onOpenFun, setAlert, info)}
              >
                등록
              </Button>
            </Form>
          </CardBody>
        </Card>
      </>
  )
}
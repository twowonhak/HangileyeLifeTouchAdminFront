import React, {useEffect, useState} from "react";
import inputData from "../../../../../utiles/fun/inputData";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {detail, onUpdate, onDelete, onClear, onUse} from "./detail";
import NotificationAlert from "../../../components/Alert/Modals/Notification";
import {cdKeyList} from "../insert/insert";

export default function Detail({info, onOpenFun, setAlert}) {
  const [data, setData] = useState({
    id: '',
    assNm: '',
    assMainNm: '',
    assSubNm: '',
    buil: '',
    team: '',
    floor: '',
    place: '',
    userNm: '',
    year: '',
    ip: '',
    ms: '',
    hwp: '',
    useYn: '',
    memo: '',
  })

  const [cdList, setCdData] = useState({assetMain:[], assetSub:[], team:[]})

  useEffect(() => {
    detail(info, setData, setAlert)
    cdKeyList(setCdData)
  }, [])

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const updateAlert = () => {
    setAlert(
        <NotificationAlert type={"warning"} setIsModalOpen={setAlert} title={"수정"} contents={"해당 정보를 수정 하시겠습니까?"} onClickFun={() => onUpdate(data, setAlert)}/>
    )
  };

  const deleteAlert = () => {
    setAlert(
        <NotificationAlert type={"danger"} setIsModalOpen={setAlert} title={"삭제"} contents={"해당 정보를 삭제 하시겠습니까?"} onClickFun={() => onDelete(data, setAlert, onOpenFun)}/>
    )
  };

  const useAlert = () => {
    setAlert(
        <NotificationAlert type={"success"} setIsModalOpen={setAlert} title={"사용"} contents={"해당 정보를 사용 하시겠습니까?"} onClickFun={() => onUse(data, setAlert, onOpenFun)}/>
    )
  };

  const clearAlert = () => {
    setAlert(
        <NotificationAlert type={"info"} setIsModalOpen={setAlert} title={"회수"} contents={"해당 정보를 회수 하시겠습니까?"} onClickFun={() => onClear(data, setAlert, onOpenFun)}/>
    )
  };


  return (
      <>
        <Card>
          <CardHeader>
            <h3 className="mb-0">재고</h3>
            <p className="text-sm mb-0">
              재고관리 상세 페이지 입니다.
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
                  고유번호
                </Label>
                <Col md="10">
                  <h3 className="mt-2">{data.id}</h3>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label"
                    htmlFor="example-text-input"
                    md="1"
                >
                  자산분류 명
                </Label>
                <Col md="10">
                  <h3 className="mt-2">{data.assNm}</h3>
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
                        checked={data.buil === 'M'}
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
                        checked={data.buil === 'N'}
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
                  <Input type="select" name={"floor"} onChange={onInputData}>
                    <option selected={data.floor === ''} value={""}></option>
                    <option selected={data.floor === 'B4'} value={"B4"}>B4</option>
                    <option selected={data.floor === 'B3'} value={"B3"}>B3</option>
                    <option selected={data.floor === 'B2'} value={"B2"}>B2</option>
                    <option selected={data.floor === 'B1'} value={"B1"}>B1</option>
                    <option selected={data.floor === '1'} value={"1"}>1</option>
                    <option selected={data.floor === '2'} value={"2"}>2</option>
                    <option selected={data.floor === '3'} value={"3"}>3</option>
                    <option selected={data.floor === '4'} value={"4"}>4</option>
                    <option selected={data.floor === '5'} value={"5"}>5</option>
                    <option selected={data.floor === '6'} value={"6"}>6</option>
                    <option selected={data.floor === '7'} value={"7"}>7</option>
                    <option selected={data.floor === '8'} value={"8"}>8</option>
                    <option selected={data.floor === '9'} value={"9"}>9</option>
                    <option selected={data.floor === '10'} value={"10"}>10</option>
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
                      cdList.team.map((value,index)=> <option key={index} selected={value.key === data.team} value={value.key}>{value.name}</option>)
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
                      value={data.place}
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
                      value={data.userNm}
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
                  <Input
                      placeholder="YYYY"
                      id="example-text-input"
                      type="text"
                      maxLength={4}
                      name={"year"}
                      value={data.year}
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
                  IP
                </Label>
                <Col md="10">
                  <Input
                      placeholder="'.' 포함 해서 작성해주세요."
                      id="example-text-input"
                      type="text"
                      maxLength={15}
                      name={"ip"}
                      value={data.ip}
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
                  <Input
                      placeholder="최대 5자"
                      id="example-text-input"
                      type="ip"
                      maxLength={5}
                      name={"ms"}
                      value={data.ms}
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
                  한글_HWP
                </Label>
                <Col md="10">
                  <Input
                      placeholder="최대 5자"
                      id="example-text-input"
                      type="text"
                      maxLength={5}
                      name={"hwp"}
                      value={data.hwp}
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
                  사용여부
                </Label>
                <Col md="10">
                  <h3 className="mt-2">
                    {{
                      'Y': '사용중',
                      'N': '미사용',
                      'D': '폐기'
                    }[data.useYn] || null}
                  </h3>
                </Col>
              </FormGroup>
              <FormGroup className="row">
                <Label
                    className="form-control-label text-danger"
                    htmlFor="example-text-input"
                    md="1"
                >
                  메모
                </Label>
                <Col md="10">
                  <Input
                      placeholder="교체 사유, 특이 사항을 적어주세요. (최대 20자)"
                      id="example-text-input"
                      type="text"
                      maxLength={20}
                      name={"memo"}
                      value={data.memo}
                      onChange={onInputData}
                  />
                </Col>
              </FormGroup>

              {{
                'Y': <>
                        <Button
                            color="warning"
                            type="button"
                            onClick={updateAlert}
                        >
                          수정
                        </Button>
                        <Button
                            color="info"
                            type="button"
                            onClick={clearAlert}
                        >
                          회수
                        </Button>
                        <Button
                            color="danger"
                            type="button"
                            onClick={deleteAlert}
                        >
                          폐기
                        </Button>
                    </>,
                'N': <>
                        <Button
                            color="success"
                            type="button"
                            onClick={useAlert}
                        >
                          사용
                        </Button>
                        <Button
                            color="danger"
                            type="button"
                            onClick={deleteAlert}
                        >
                          폐기
                        </Button>
                    </>,
                'D': null
              }[data.useYn] || null}

            </Form>
          </CardBody>
        </Card>
      </>
  )
}
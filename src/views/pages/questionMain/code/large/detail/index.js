import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React, {useEffect, useRef, useState} from "react";
import inputData from "../../../../../../utiles/fun/inputData";
import NotificationAlert from "../../../../components/Alert/Modals/Notification";
import List from "../../../../components/List";
import {detailSelect, listSelect, onDelete, onUpdate} from "./detail";
import MidInsert from "./middle/insert";
import MidSort from "./middle/sort";
import MidDetail from "./middle/detail";

export default function Detail({info, setAlert, mainIsOpenListFun, search}) {

  const midInfo = useRef("")
  const [data, setData] = useState(info.current)
  const [dataList, setDataList] = useState([])
  const [isOpenList, setIsOpenList] = useState(true);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);

  const columns = [
    {
      dataField: "key",
      text: "KEY",
      sort: true,
    },
    {
      dataField: "midCtgNm",
      text: "중 분류명",
      sort: true,
    },
  ]

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const isOpenListFun = () => {
    setIsOpenList(true)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
    setIsOpenSort(false)
  }

  const isOpenInsertFun = () => {
    setIsOpenList(false)
    setIsOpenInsert(true)
    setIsOpenDetail(false)
    setIsOpenSort(false)
  }

  const isOpenDetailFun = () => {

    midInfo.current = {
      lrgCtgCd: data.lrgCtgCd,
      midCtgCd: midInfo.current,
    }

    setIsOpenList(false)
    setIsOpenInsert(false)
    setIsOpenDetail(true)
    setIsOpenSort(false)
  }

  const isOpenSortFun = () => {
    setIsOpenList(false)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
    setIsOpenSort(true)
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

  useEffect(()=>{
    detailSelect(info, setData, setAlert)
  },[])

  useEffect(()=>{
    if(isOpenList)
      listSelect(info, setAlert, setDataList);
  },[isOpenList])

  const SubMenu = () => {
    return (
        <div>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={isOpenListFun}>목록</button>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={isOpenInsertFun}>등록</button>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={isOpenSortFun}>순서변경</button>
        </div>
    )
  }

  return (
      <>
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">대 분류 정보</h3>
                <p className="text-sm mb-0">
                  
                </p>
                {/*{search}*/}
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup className="row">
                    <Label
                        className="form-control-label"
                        htmlFor="example-text-input"
                        md="1"
                    >
                      대 분류 명
                    </Label>
                    <Col md="10">
                      <Input
                          placeholder="최대 10자"
                          id="example-text-input"
                          type="text"
                          name="lrgCtgNm"
                          value={data.lrgCtgNm || ''}
                          onChange={onInputData}
                      />
                    </Col>
                  </FormGroup>
                  <Button
                      color="warning"
                      type="button"
                      onClick={updateAlert}
                  >
                    수정
                  </Button>
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
          </div>
        </Row>
        <Row>
          <div className="col">
            {
              isOpenList
                  ? <List info={midInfo} type={'radio'} columns={columns} dataList={dataList} title={"중 분류"} SubMenu={<SubMenu/>}
                          contents={"대 분류에 포함 된 중 분류 목록 입니다."} setAlert={setAlert}
                          setIsOpenDetailFun={isOpenDetailFun}/>
                  : null
            }
            {
              isOpenDetail
                  ? <MidDetail info={midInfo} setAlert={setAlert} SubMenu={<SubMenu/>} mainIsOpenListFun={isOpenListFun}/>
                  : null
            }
            {
              isOpenInsert
                  ? <MidInsert lrgData={data} setAlert={setAlert} SubMenu={<SubMenu/>} isOpenListFun={isOpenListFun}/>
                  : null
            }
            {
              isOpenSort
                  ? <MidSort dataList={dataList} setAlert={setAlert} SubMenu={<SubMenu/>} />
                  : null
            }
          </div>
        </Row>
      </>
  )
}
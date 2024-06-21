import React, {useEffect, useRef, useState} from "react";
import listSelect from "./list";
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import List from "../../../../components/List";
import inputData from "../../../../../../utiles/fun/inputData";
import NotificationAlert from "../../../../components/Alert/Modals/Notification";
import ExampleInsert from "../insert"
import ExampleDetail from "../detail"
import SortUpdate from "../sort"
import {detail, onDelete, onUpdate} from "../../question/detail/detail";


export default function ExampleList({queInfo, setIsOpenMainFun}) {

  const info = useRef('')
  const [data, setData] = useState({})
  const [searchDate, setSearchDate] = useState({useDate: ""})
  const [dataList, setDataList] = useState([])
  const [isOpenExampleListMain, setIsOpenExampleListMain] = useState(true);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenSortUpdate, setIsOpenSortUpdate] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [isNotificationAlertOpen, setIsNotificationAlertOpen] = useState(null);

  const columns = [
    {
      dataField: "key",
      text: "KEY",
      sort: true,
    },
    {
      dataField: "content",
      text: "보기 내용",
      sort: true,
    },
    {
      dataField: "type",
      text: "보기 타입",
      sort: true,
    },
  ]

  useEffect(() => {
    detail(queInfo, setData, setIsOpenAlert)
  }, [])

  useEffect(() => {
    if (isOpenExampleListMain) {
      listSelect(queInfo, setDataList, searchDate)
    }
  }, [isOpenExampleListMain])

  // 보기 상세
  const setIsOpenDetailFun = () => {
    setIsOpenExampleListMain(false)
    setIsOpenInsert(false)
    setIsOpenDetail(true)
    setIsOpenSortUpdate(false)
  }

  // 보기 등록
  const setIsOpenInsertFun = () => {
    setIsOpenExampleListMain(false)
    setIsOpenInsert(true)
    setIsOpenDetail(false)
    setIsOpenSortUpdate(false)
  }

  // 보기 리스트
  const setIsOpenListFun = () => {
    setIsOpenExampleListMain(true)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
    setIsOpenSortUpdate(false)
  }

  // 보기 순서 변경
  const setIsOpenSortFun = () => {
    setIsOpenExampleListMain(false)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
    setIsOpenSortUpdate(true)
  }


  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const deleteAlert = () => {
    setIsNotificationAlertOpen(
        <NotificationAlert type={"danger"} setIsModalOpen={setIsNotificationAlertOpen}
                           title={"삭제"} contents={`해당 정보를 삭제 하시겠습니까?\n삭제 시 해당 보기에 내용도 함께 삭제 됩니다.`}
                           onClickFun={() => onDelete(data, setIsOpenMainFun, setIsOpenAlert)}/>
    )
  };

  const updateAlert = (e) => {
    setIsNotificationAlertOpen(
        <NotificationAlert type={"primary"} setIsModalOpen={setIsNotificationAlertOpen}
                           title={"수정"} contents={"해당 정보를 수정 하시겠습니까?"}
                           onClickFun={() => onUpdate(data, setIsOpenAlert, setIsNotificationAlertOpen)}/>
    )
  };

  return (
      <>
        {isOpenAlert}
        {isNotificationAlertOpen}
        <Row>
          <div className="col">
            <Card>
              <CardHeader>
                <h3 className="mb-0">질문 케이스 정보</h3>
                <p className="text-sm mb-0">
                  적용기간 만 수정이 가능 합니다.
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
                      질문 내용
                    </Label>
                    <Col md="10">
                      <Input
                          placeholder="최대 60자 입니다."
                          id="example-text-input"
                          type="text"
                          readOnly={true}
                          value={data.content || ''}
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
                    <div className="custom-control ml-7">
                      적용기간 삭제 시 적용기간 상관 없음
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
                          value={data.upUserNm || ''}
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
                          value={data.upDtime || ''}
                      />
                    </Col>
                  </FormGroup>
                  {isOpenExampleListMain
                      ? <Button
                          color="info"
                          type="button"
                          onClick={setIsOpenInsertFun}
                      >보기 등록</Button>
                      : <Button
                          color="default"
                          type="button"
                          onClick={setIsOpenListFun}
                      >보기 리스트 조회</Button>
                  }
                  <Button
                      color="secondary"
                      type="button"
                      onClick={setIsOpenSortFun}
                  >보기 순서 변경</Button>
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
          </div>
        </Row>
        <Row>
          <div className="col">
            {
              isOpenExampleListMain ?
                  <List dataList={dataList} type={'radio'} info={info} columns={columns} title={"보기"}
                        contents={"위 질문에 포함 된 보기 입니다."}
                        setIsOpenDetailFun={setIsOpenDetailFun}/> : null
            }
            {
              isOpenInsert ?
                  <ExampleInsert queKey={data.key} setIsOpenListFun={setIsOpenListFun} /> : null
            }

            {
              isOpenDetail ?
                  <ExampleDetail info={info.current} setIsOpenListFun={setIsOpenListFun}/> : null
            }
            {
              isOpenSortUpdate ?
                  <SortUpdate dataKey={queInfo.key}/> : null
            }
          </div>
        </Row>
      </>
  )
}
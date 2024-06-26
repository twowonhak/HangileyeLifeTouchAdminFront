import React, {memo, useEffect, useRef, useState} from "react";
import SimpleHeader from "../../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import List from "../../../components/List";
import Detail from "../detail";
import Sort from "../sort";
import Insert from "../insert";
import NotificationAlert from "../../../components/Alert/Modals/Notification";
import {listSelect, onDelete} from "./list";

export default memo(function CaseList({patInfo, onOpenFun, setIsOpenAlert}) {
  const info = useRef('')
  const [dataList, setDataList] = useState([])
  const [isOpenList, setIsOpenList] = useState(true);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isNotificationAlertOpen, setIsNotificationAlertOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menu = [
    {
      name: '환자 케이스 검색', fun: () => {
        onOpenFun()
      }
    },
    {
      name: '리스트', fun: () => {
        setIsOpenListFun()
      }
    },
    {
      name: '등록', fun: () => {
        setIsOpenInsertFun()
      }
    },
    {
      name: '순서 변경', fun: () => {
        setIsOpenSortFun()
      }
    }
  ]
  const columns = [
    {
      dataField: "key",
      text: "KEY",
      sort: true,
    },
    {
      dataField: "content",
      text: "질문 내용",
      sort: true,
    },
    {
      dataField: "useStrDat",
      text: "적용기간 - 시작",
      sort: true,
    },
    {
      dataField: "useEndDat",
      text: "적용기간 - 마감",
      sort: true,
    },
  ]

  useEffect(() => {
    if (setIsOpenList) {
      listSelect(setDataList, patInfo)
    }
  }, [isOpenList])

  function setIsOpenListFun() {
    setIsOpenList(true)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
    setIsOpenSort(false)
  }

  function setIsOpenInsertFun() {
    setIsOpenList(false)
    setIsOpenInsert(true)
    setIsOpenDetail(false)
    setIsOpenSort(false)
  }

  function setIsOpenDetailFun() {
    setIsOpenList(false)
    setIsOpenInsert(false)
    setIsOpenDetail(true)
    setIsOpenSort(false)
  }

  function setIsOpenSortFun() {
    setIsOpenList(false)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
    setIsOpenSort(true)
  }

  const deleteAlert = () => {
    setIsNotificationAlertOpen(
        <NotificationAlert type={"danger"} isModalOpen={isModalOpen} setIsModalOpen={setIsNotificationAlertOpen} title={"삭제"} contents={"해당 정보를 삭제 하시겠습니까?"} onClickFun={() => onDelete(info, patInfo, setDataList, setIsNotificationAlertOpen,setIsOpenAlert)}/>
    )
  };

  return (
      <>
        {isNotificationAlertOpen}
        <SimpleHeader name="케이스" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {
                isOpenList
                    ? <List dataList={dataList} type={'radio'} info={info} columns={columns} title={"질문 (환자 케이스 키:" + patInfo.current + ")"}
                            contents={"조회 한 환자 케이스에 등록된 질문 정보 입니다."} setIsOpenDetailFun={deleteAlert}/>
                    : null
              }
              {
                isOpenInsert
                    ? <Insert patInfo={patInfo} onOpenFun={setIsOpenListFun} setIsOpenAlert={setIsOpenAlert}/>
                    : null
              }
              {
                isOpenDetail
                    ? <Detail info={info} onOpenFun={setIsOpenDetailFun} setIsOpenAlert={setIsOpenAlert}/>
                    : null
              }
              {
                isOpenSort
                    ? <Sort infoKey={patInfo} onOpenFun={setIsOpenSortFun} setIsOpenAlert={setIsOpenAlert}/>
                    : null
              }
            </div>
          </Row>
        </Container>
      </>
  )
})

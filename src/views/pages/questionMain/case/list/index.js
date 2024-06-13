import React, {memo, useEffect, useRef, useState} from "react";
import listSelect from "./list";
import SimpleHeader from "../../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import List from "../../../components/List";
import Detail from "../detail";
import Sort from "../sort";
import Insert from "../insert";

export default memo(function CaseList({patInfo, onOpenFun, setIsOpenAlert}) {
  const info = useRef('')
  const [dataList, setDataList] = useState([])
  const [isOpenList, setIsOpenList] = useState(true);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
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
  ]

  useEffect(() => {
    if (setIsOpenList) {
      listSelect(setDataList, patInfo)
    }
  }, [])

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

  return (
      <>
        <SimpleHeader name="케이스" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {
                isOpenList
                    ? <List dataList={dataList} type={'radio'} info={info} columns={columns} title={"질문 (환자 케이스 키:" + patInfo.current + ")"}
                            contents={"조회 한 환자 케이스에 등록된 질문 정보 입니다."} setIsOpenDetailFun={onOpenFun}/>
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
                    ? <Sort info={info} onOpenFun={setIsOpenSortFun} setIsOpenAlert={setIsOpenAlert}/>
                    : null
              }
            </div>
          </Row>
        </Container>
      </>
  )
})

import React, {useEffect, useRef, useState} from "react";
import Detail from "./detail";
import Insert from "./insert";
import Sort from "./sort";
import SimpleHeader from "../../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import {listSelect} from "./list/list";
import List from "../../../components/List";

export default function Large() {

  const info = useRef('')
  const [dataList, setDataList] = useState([])
  const [alert, setAlert] = useState(null);
  const [isOpenList, setIsOpenList] = useState(true);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);

  const menu = [
    {
      name: '목록', fun: () => {
        setIsOpenList(true)
        setIsOpenDetail(false)
        setIsOpenInsert(false)
        setIsOpenSort(false)
      }
    },
    {
      name: '등록', fun: () => {
        setIsOpenList(false)
        setIsOpenDetail(false)
        setIsOpenInsert(true)
        setIsOpenSort(false)
      }
    },
    {
      name: '순서변경', fun: () => {
        setIsOpenList(false)
        setIsOpenDetail(false)
        setIsOpenInsert(false)
        setIsOpenSort(true)
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
      dataField: "lrgCtgNm",
      text: "대 분류명",
      sort: true,
    },
  ]

  useEffect(() => {
    if (isOpenList) {
      listSelect(setDataList)
    }
  }, [isOpenList])


  function isOpenDetailFun(){
    setIsOpenList(false)
    setIsOpenDetail(true)
    setIsOpenInsert(false)
    setIsOpenSort(false)
  }

  function isOpenListFun(){
    setIsOpenList(true)
    setIsOpenDetail(false)
    setIsOpenInsert(false)
    setIsOpenSort(false)
  }

  return (
      <>
        {alert}
        <SimpleHeader name="코드" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {
                isOpenList
                    ? <List info={info} type={'radio'} columns={columns} dataList={dataList} title={"대 분류"}
                            contents={"문진표 대 분류 목록 입니다. "} setAlert={setAlert} setIsOpenDetailFun={isOpenDetailFun}/>
                    : null
              }
              {
                isOpenDetail
                    ? <Detail info={info} setAlert={setAlert} mainIsOpenListFun={isOpenListFun}/>
                    : null
              }
              {
                isOpenInsert
                    ? <Insert info={info} setAlert={setAlert} isOpenListFun={isOpenListFun}/>
                    : null
              }
              {
                isOpenSort
                    ? <Sort dataList={dataList} setAlert={setAlert}/>
                    : null
              }
            </div>
          </Row>
        </Container>
      </>
  )
}
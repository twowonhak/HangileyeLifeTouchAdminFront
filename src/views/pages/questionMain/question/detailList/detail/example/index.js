import React, {useEffect, useRef, useState} from "react";
import List from "../../../../../components/List";
import {listSelect} from "./list/list";
import Insert from "./insert";
import Detail from "./detail";
import Sort from "./sort";

export default function Example({info, setAlert}) {

  const queInfo = useRef("")
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
      dataField: "exaTxt",
      text: "보기 내용",
      sort: true,
    },
    {
      dataField: "type",
      text: "타입",
      sort: true,
    },
  ]

  useEffect(() => {
  if(isOpenList)
    listSelect(setDataList, info, setAlert)
  }, [isOpenList])

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

  const isOpenSortFun = () => {
    setIsOpenList(false)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
    setIsOpenSort(true)
  }

  const isOpenDetailFun = () => {
    setIsOpenList(false)
    setIsOpenInsert(false)
    setIsOpenDetail(true)
    setIsOpenSort(false)
  }

  const SubMenu = () => {
    return (
        <div>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={isOpenListFun}>보기 목록</button>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={isOpenInsertFun}>보기 등록</button>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={isOpenSortFun}>보기 순서변경</button>
        </div>
    )
  }

  return (
      <>
        {
          isOpenList
              ? <List info={queInfo} type={'radio'} columns={columns} dataList={dataList} title={"보기 목록"}
                      SubMenu={<SubMenu/>}
                      contents={"위 질문에 포함 된 보기 입니다."} setAlert={setAlert}
                      setIsOpenDetailFun={isOpenDetailFun}/>
              : null
        }
        {
          isOpenDetail
              ? <Detail info={queInfo} setAlert={setAlert} isOpenListFun={isOpenListFun}  SubMenu={<SubMenu/>}/>
              : null
        }
        {
          isOpenInsert
              ? <Insert info={info} setAlert={setAlert} isOpenListFun={isOpenListFun}  SubMenu={<SubMenu/>}/>
              : null
        }
        {
          isOpenSort
              ? <Sort info={info} setAlert={setAlert} SubMenu={<SubMenu/>}/>
              : null
        }
      </>
  )

}
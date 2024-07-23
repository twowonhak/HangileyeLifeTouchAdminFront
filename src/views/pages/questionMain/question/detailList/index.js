import React, {useEffect, useRef, useState} from "react";
import List from "../../../components/List";
import Detail from "./detail";
import Insert from "./insert";
import Sort from "./sort";
import {listSelect} from "./list/list";
import {Input} from "reactstrap";
import {inputDateDefault} from "../../../../../utiles/fun/inputDateDefault";
import inputDate from "../../../../../utiles/fun/inputDate";


export default function DetailList({codeInfo, setAlert}) {

  const info = useRef();
  const [reqData, setReqData] = useState({...codeInfo.current, ["searchDate"]: inputDateDefault()})
  const [dataList, setDataList] = useState([])
  const [isOpenList, setIsOpenList] = useState(true);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);

  useEffect(() => {
    if (isOpenList) {
      listSelect(setDataList, reqData, setAlert)
    }
  }, [isOpenList, reqData.searchDate])

  const SubMenu = () => {
    return (
        <div>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={isOpenListFun}>목록</button>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={isOpenInsertFun}>등록</button>
          <button type="button" className="btn btn-outline-primary btn-sm" onClick={isOpenSortFun}>순서변경</button>
        </div>
    )
  }

  function isOpenDetailFun() {
    setIsOpenList(false)
    setIsOpenDetail(true)
    setIsOpenInsert(false)
    setIsOpenSort(false)
  }

  function isOpenListFun() {
    setIsOpenList(true)
    setIsOpenDetail(false)
    setIsOpenInsert(false)
    setIsOpenSort(false)
  }

  function isOpenInsertFun() {
    setIsOpenList(false)
    setIsOpenDetail(false)
    setIsOpenInsert(true)
    setIsOpenSort(false)
  }

  function isOpenSortFun() {
    setIsOpenList(false)
    setIsOpenDetail(false)
    setIsOpenInsert(false)
    setIsOpenSort(true)
  }

  const columns = [
    {
      dataField: "key",
      text: "KEY",
      sort: true,
    },
    {
      dataField: "queTxt",
      text: "질문 내용",
      sort: true,
    },
    {
      dataField: "useStrDat",
      text: "적용기간_시작",
      sort: true,
    },
    {
      dataField: "useEndDat",
      text: "적용기간_마감",
      sort: true,
    },
  ]

  const onInputDate = (e) => {
    inputDate(e, reqData, setReqData)
  }

  const Search = () => {
    return (
        <div>
          <label className="mr-3">
            적용일자:
            <Input
                bsSize="sm"
                id="example-date-input"
                type="date"
                name="searchDate"
                onChange={onInputDate}
                value={reqData.searchDate}
            />
          </label>
        </div>
    )
  }

  return (
      <>
        {
          isOpenList
              ? <List info={info} type={'radio'} columns={columns} dataList={dataList}
                      title={"질문 목록"}
                      contents={`${codeInfo.current.lrgCtgNm} > ${codeInfo.current.midCtgNm} 에 등록 된 질문 입니다.`} setAlert={setAlert} setIsOpenDetailFun={isOpenDetailFun}
                      SearchTab={<Search/>} SubMenu={<SubMenu/>} />
              : null
        }
        {
          isOpenDetail
              ? <Detail info={info} codeInfo={codeInfo} setAlert={setAlert} SubMenu={<SubMenu/>} isOpenListFun={isOpenListFun}/>
              : null
        }
        {
          isOpenInsert
              ? <Insert info={info} codeInfo={codeInfo} setAlert={setAlert} isOpenListFun={isOpenListFun} SubMenu={<SubMenu/>}/>
              : null
        }
        {
          isOpenSort
              ? <Sort info={info} codeInfo={codeInfo} setAlert={setAlert} SubMenu={<SubMenu/>}
              />
              : null
        }
      </>
  )
}
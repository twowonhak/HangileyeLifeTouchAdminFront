import React, {memo, useEffect, useRef, useState} from "react";
import List from "../../../components/List";
import {listSelect, queInsert} from "./insert";
import {useNavigate} from "react-router-dom";
import {Tooltip} from "react-tooltip";


export default memo(function Insert({patInfo, onOpenFun, setAlert}) {

  const info = useRef('')
  const [dataList, setDataList] = useState([])
  const navigate = useNavigate ();
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
      formatter: (cell, row) => (
          <div>
            <span data-tooltip-id="tooltip" data-tooltip-content={row.exampleArr}>{cell}</span>
            <Tooltip id="tooltip" effect="solid" place="bottom" type="dark" />
          </div>
      )
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

  useEffect(()=>{
    listSelect(setDataList, patInfo)
  },[])

  function insertFun(checkData){
    queInsert(patInfo, checkData, setAlert, onOpenFun)
  }

  return (
      <>
        <List dataList={dataList} type={'checkbox'} insertFun={insertFun} info={info} columns={columns}
              title={"질문 등록 (환자 케이스 키:" + patInfo.current + ")"}
              contents={"추가 하고자 하는 질문을 등록 해주세요. 이미 등록 되어 있는 질문은 보이지 않습니다."} setIsOpenDetailFun={()=>{}}/>
      </>
  )
})

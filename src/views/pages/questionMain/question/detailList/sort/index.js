import React, {useEffect, useState} from "react";
import {changeArrayOrder} from "../../../../../../utiles/fun/changeArrayOrder";
import SortList from "../../../../components/SortList";
import {sortListSelect, update} from "./sort";

export default function Sort({info, codeInfo, setAlert, SubMenu}) {

  const [sortDataList, setSortDataList] = useState([])

  useEffect(() => {
    sortListSelect(setSortDataList, codeInfo.current, setAlert)
  }, [])

  const sortChange = (type, row) => {
    let list = [...sortDataList]
    switch (type) {
      case '최상위' :
        list = changeArrayOrder(list, row.key, -100)
        break;
      case '상' :
        list = changeArrayOrder(list, row.key, -1)
        break;
      case '하' :
        list = changeArrayOrder(list, row.key, 1)
        break;
      case '최하위' :
        list = changeArrayOrder(list, row.key, 100)
        break;
    }
    setSortDataList([...list])
  }

  // 버튼 렌더링 함수
  const actionFormatter = (cell, row, rowIndex, formatExtraData) => {
    return (<>
      <button className={"btn btn-primary btn-sm"} onClick={() => sortChange("최상위", row)}>최상위</button>
      <button className={"btn btn-secondary btn-sm"} onClick={() => sortChange("상", row)}>상</button>
      <button className={"btn btn-primary btn-sm"} onClick={() => sortChange("하", row)}>하</button>
      <button className={"btn btn-secondary btn-sm"} onClick={() => sortChange("최하위", row)}>최하위</button>
    </>);
  }

  const columns = [
    {dataField: 'key', text: 'KEY'},
    {dataField: 'queTxt', text: '질문 내용'},
    {dataField: 'useStrDat', text: '적용기간_시작'},
    {dataField: 'useEndDat', text: '적용기간_마감'},
    {dataField: 'sortChange', text: '순서변경', formatter: actionFormatter, headerStyle: {width: '200px'}}
  ]


  const sortUpdate = () => {
    update(sortDataList, setAlert)
  }


  return (
      <>
        <SortList columns={columns} title={"질문 순서"} dataList={sortDataList} sortUpdate={sortUpdate} SubMenu={SubMenu}/>
      </>
  )
}
import React, {memo, useEffect, useState} from "react";
import {changeArrayOrder} from "../../../../../../utiles/fun/changeArrayOrder";
import SortList from "../../../../components/SortList";
import {sortList, update} from "./sort";

export default memo(function Sort({infoKey, onOpenFun, setAlert}) {

  const [dataList, setDataList] = useState([])

  const sortChange = (type, row) => {
    let list = [...dataList]
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
    setDataList([...list])
  }

  useEffect(()=>{
    sortList(infoKey, setDataList, setAlert)
  },[])

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
    {dataField: 'content', text: '보기 내용'},
    {dataField: 'sortChange', text: '순서변경', formatter: actionFormatter, headerStyle: {width: '200px'}}
  ]


  const sortUpdate = () => {
    update(dataList, setAlert)
  }

  return (
      <>
        <SortList columns={columns} title={"보기 순서"} dataList={dataList} sortUpdate={sortUpdate}/>
      </>
  )
})

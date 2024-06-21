import React, {useRef, useState} from "react";
import ChartSearch from "./chartSearch";
import PatInfo from "./patInfo";

export default function Response() {

  const chartNo = useRef('')
  const [isOpenSearch, setIsOpenSearch] = useState(true);
  const [isOpenResult, setIsOpenResult] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(null);

  function setIsOpenSearchFun() {
    setIsOpenSearch(true)
    setIsOpenResult(false)
  }

  function setIsOpenResultFun() {
    setIsOpenSearch(false)
    setIsOpenResult(true)
  }

  return (
      <>
        {isOpenAlert}
        {
          isOpenSearch
            ? <ChartSearch chartNo={chartNo} setIsOpenAlert={setIsOpenAlert} setIsOpenResultFun={setIsOpenResultFun}/>
            : null
        }
        {
          isOpenResult
              ? <PatInfo chartNo={chartNo} setIsOpenAlert={setIsOpenAlert} setIsOpenSearchFun={setIsOpenSearchFun}/>
              : null
        }
      </>
  )
}
import React, {useRef, useState} from "react";
import ChartSearch from "./chartSearch";
import PatInfo from "./patInfo";

export default function Response() {

  const chartNo = useRef('')
  const [isOpenSearch, setIsOpenSearch] = useState(true);
  const [isOpenResult, setIsOpenResult] = useState(false);
  const [alert, setAlert] = useState(null);

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
        {alert}
        {
          isOpenSearch
            ? <ChartSearch chartNo={chartNo} setAlert={setAlert} setIsOpenResultFun={setIsOpenResultFun}/>
            : null
        }
        {
          isOpenResult
              ? <PatInfo chartNo={chartNo} setAlert={setAlert} setIsOpenSearchFun={setIsOpenSearchFun}/>
              : null
        }
      </>
  )
}
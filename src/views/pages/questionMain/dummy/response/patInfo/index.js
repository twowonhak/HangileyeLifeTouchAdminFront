import React, {useState} from "react";
import ResResult from "./resResult";
import Info from "./info";

export default function PatInfo({chartNo, setAlert, setIsOpenSearchFun}) {

  const [isOpenResResult, setIsOpenResResult] = useState(true)

  return (
      <>
        {
          isOpenResResult
              ? <Info chartNo={chartNo} setAlert={setAlert} setIsOpenSearchFun={setIsOpenSearchFun} setIsOpenResResult={setIsOpenResResult}/>
              : <ResResult chartNo={chartNo} setAlert={setAlert} setIsOpenSearchFun={setIsOpenSearchFun} setIsOpenResResult={setIsOpenResResult}/>
        }
      </>
  )
}

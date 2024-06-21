import React, {useState} from "react";
import ResResult from "./resResult";
import Info from "./info";

export default function PatInfo({chartNo, setIsOpenAlert, setIsOpenSearchFun}) {

  const [isOpenResResult, setIsOpenResResult] = useState(true)

  return (
      <>
        {
          isOpenResResult
              ? <Info chartNo={chartNo} setIsOpenAlert={setIsOpenAlert} setIsOpenSearchFun={setIsOpenSearchFun} setIsOpenResResult={setIsOpenResResult}/>
              : <ResResult chartNo={chartNo} setIsOpenAlert={setIsOpenAlert} setIsOpenSearchFun={setIsOpenSearchFun} setIsOpenResResult={setIsOpenResResult}/>
        }
      </>
  )
}

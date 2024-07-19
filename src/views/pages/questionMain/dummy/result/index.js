import React, {useRef, useState} from "react";
import Search from "./search"
import ResultList from './list'

export default function Result() {

  const patInfo = useRef('')
  const [isOpenSearch, setIsOpenSearch] = useState(true);
  const [isOpenList, setIsOpenList] = useState(false);

  const [alert, setAlert] = useState(null);

  function setIsOpenSearchFun() {
    setIsOpenSearch(true)
    setIsOpenList(false)
  }

  function setIsOpenListFun() {
    setIsOpenSearch(false)
    setIsOpenList(true)
  }

  return (
      <>
        {alert}
        {
          isOpenSearch
              ? <Search patInfo={patInfo} onOpenFun={setIsOpenListFun} setAlert={setAlert}/>
              : null
        }
        {
          isOpenList
              ? <ResultList patInfo={patInfo} onOpenFun={setIsOpenSearchFun} setAlert={setAlert}/>
              : null
        }
      </>
  )
}
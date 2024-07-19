import React, {useRef, useState} from "react";
import Search from "./search"
import CaseList from "./list";

export default function Case() {

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
              ? <CaseList patInfo={patInfo} onOpenFun={setIsOpenSearchFun} setAlert={setAlert}/>
              : null
        }
      </>
  )
}
import React, {useRef, useState} from "react";
import Search from "./search"
import CaseList from "./list";

export default function Case() {

  const patInfo = useRef('')
  const [isOpenSearch, setIsOpenSearch] = useState(true);
  const [isOpenList, setIsOpenList] = useState(false);

  const [isOpenAlert, setIsOpenAlert] = useState(null);

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
        {isOpenAlert}
        {
          isOpenSearch
              ? <Search patInfo={patInfo} onOpenFun={setIsOpenListFun} setIsOpenAlert={setIsOpenAlert}/>
              : null
        }
        {
          isOpenList
              ? <CaseList patInfo={patInfo} onOpenFun={setIsOpenSearchFun} setIsOpenAlert={setIsOpenAlert}/>
              : null
        }
      </>
  )
}
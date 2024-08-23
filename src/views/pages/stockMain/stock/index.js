import React, {useRef, useState} from "react";
import SimpleHeader from "../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import Detail from "./detail";
import Insert from "./insert";
import StockList from "./list";
import DisInsert from "./disposableInsert";

export default function Stock() {
  const info = useRef('')

  const [searchData, setSearchData] = useState({
    assMainCd: '',
    assSubCd: '',
    buil: '',
    floor: '',
    team: '',
    useYn: '',
  })

  const [isOpenList, setIsOpenList] = useState(true);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenDisInsert, setIsOpenDisInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [alert, setAlert] = useState(false);
  const menu = [
    {
      name: '목록', fun: () => {
        setIsOpenListFun()
      }
    },
    {
      name: '재고 등록', fun: () => {
        setIsOpenInsertFun()
      }
    },
    // {
    //   name: '소모품/라이센스 등록', fun: () => {
    //     setIsOpenDisDetailFun()
    //   }
    // },
  ]

  function setIsOpenListFun() {
    setAlert(null)
    setIsOpenList(true)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
    setIsOpenDisInsert(false)
  }

  function setIsOpenInsertFun() {
    setIsOpenList(false)
    setIsOpenInsert(true)
    setIsOpenDetail(false)
    setIsOpenDisInsert(false)
  }

  function setIsOpenDetailFun() {
    setIsOpenList(false)
    setIsOpenInsert(false)
    setIsOpenDetail(true)
    setIsOpenDisInsert(false)
  }

  function setIsOpenDisDetailFun() {
    setIsOpenList(false)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
    setIsOpenDisInsert(true)
  }

  return (
      <>
        {alert}
        <SimpleHeader name="재고관리" parentName="재고" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {
                isOpenList
                    ? <StockList searchData={searchData} setSearchData={setSearchData} isOpenList={isOpenList} info={info} setIsOpenDetailFun={setIsOpenDetailFun}/>
                    : null
              }
              {
                isOpenInsert
                    ? <Insert info={info} onOpenFun={setIsOpenDetailFun} setAlert={setAlert}/>
                    : null
              }
              {
                isOpenDetail
                    ? <Detail info={info} onOpenFun={setIsOpenListFun} setAlert={setAlert}/>
                    : null
              }
              {
                isOpenDisInsert
                  ? <DisInsert info={info} onOpenFun={setIsOpenListFun} setAlert={setAlert}/>
                  : null
              }
            </div>
          </Row>
        </Container>
      </>

  )
}
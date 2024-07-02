import React, {useEffect, useRef, useState} from "react";
import listSelect from "./list/list";
import SimpleHeader from "../../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import Insert from "./insert";
import Detail from "./detail";
import List from "../../../components/List";
import Search from "./search";

export default function PatientCase() {

  const info = useRef('')
  const [dataList, setDataList] = useState([])
  const [isOpenMain, setIsOpenMain] = useState(true);
  const [isOpenList, setIsOpenList] = useState(true);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [alert, setAlert] = useState(null);
  const menu = [
    {
      name: '리스트', fun: () => {
        setIsOpenList(true)
        setIsOpenMain(false)
        setIsOpenInsert(false)
        setIsOpenDetail(false)
      }
    },
    {
      name: '검색', fun: () => {
        setIsOpenList(false)
        setIsOpenMain(true)
        setIsOpenInsert(false)
        setIsOpenDetail(false)
      }
    },
    // {
    //   name: '등록', fun: () => {
    //     setIsOpenMain(false)
    //     setIsOpenInsert(true)
    //     setIsOpenDetail(false)
    //   }
    // },
  ]
  const columns = [
    {
      dataField: "key",
      text: "KEY",
      sort: true,
    },
    {
      dataField: "type",
      text: "진료타입",
      sort: true,
    },
    {
      dataField: "diagCd",
      text: "진료과",
      sort: true,
    },
    {
      dataField: "sex",
      text: "성별",
      sort: true,
    },
    {
      dataField: "birth",
      text: "나이",
      sort: true,
    },
    {
      dataField: "pagtTy",
      text: "과거력",
      sort: true,
    },
    {
      dataField: "specialNote",
      text: "특이사항",
      sort: true,
    },
  ]

  useEffect(() => {
    if (isOpenList) {
      listSelect(setDataList)
    }
  }, [isOpenList])

  const setIsOpenDetailFun = () => {
    setIsOpenList(false)
    setIsOpenMain(false)
    setIsOpenInsert(false)
    setIsOpenDetail(true)
  }
  const setIsOpenMainFun = () => {
    setIsOpenList(false)
    setIsOpenMain(true)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
  }

  return (
      <>
        {alert}
        <SimpleHeader name="환자 케이스" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {isOpenMain ?
                  <Search patInfo={info} onOpenFun={setIsOpenDetailFun} /> : null}
              {isOpenList ?
                  <List dataList={dataList} type={'radio'} info={info} columns={columns} title={"환자정보"} contents={"등록된 환자 정보 입니다."}
                        setIsOpenDetailFun={setIsOpenDetailFun}/> : null}
              {isOpenInsert ?
                  <Insert setIsOpenMainFun={setIsOpenMainFun}/> : null}
              {isOpenDetail ?
                  <Detail info={info} setIsOpenMainFun={setIsOpenMainFun}/> : null}
            </div>
          </Row>
        </Container>
      </>
  )
}
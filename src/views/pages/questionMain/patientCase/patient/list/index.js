import React, {useEffect, useRef, useState} from "react";
import listSelect from "./list";
import SimpleHeader from "../../../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import Insert from "../insert";
import Detail from "../detail";
import List from "../../../../components/List";

export default function PatientCase() {

  const info = useRef('')
  const [dataList, setDataList] = useState([])
  const [isOpenMain, setIsOpenMain] = useState(true);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(null);
  const menu = [
    {
      name: '메인', fun: () => {
        setIsOpenMain(true)
        setIsOpenInsert(false)
        setIsOpenDetail(false)
      }
    },
    {
      name: '등록', fun: () => {
        setIsOpenMain(false)
        setIsOpenInsert(true)
        setIsOpenDetail(false)
      }
    },
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
    if (!isOpenInsert && !isOpenDetail) {
      listSelect(setDataList)
    }
  }, [isOpenMain])

  const setIsOpenDetailFun = () => {
    setIsOpenMain(false)
    setIsOpenInsert(false)
    setIsOpenDetail(true)
  }
  const setIsOpenMainFun = () => {
    setIsOpenMain(true)
    setIsOpenInsert(false)
    setIsOpenDetail(false)
  }

  return (
      <>
        {isOpenAlert}
        <SimpleHeader name="환자 케이스" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {isOpenMain ?
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
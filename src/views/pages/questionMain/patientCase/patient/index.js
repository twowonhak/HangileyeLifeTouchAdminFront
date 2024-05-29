import React, {useEffect, useRef, useState} from "react";
import listSelect from "./list/patientCase";
import SimpleHeader from "../../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import Insert from "./insert";
import Detail from "./detail";
import List from "../../../components/List";

export default function PatientCase() {

  const info = useRef('')
  const [searchDate, setSearchDate] = useState({useDate: ""})
  const [dataList, setDataList] = useState([])
  const [isOpenMain, setIsOpenMain] = useState(true);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [alert, setAlert] = useState(null);
  const [menu, setMenu] = useState([
    {
      name: '메인', fun: () => {
        setIsOpenMain(true)
        setIsOpenInsert(false)
        setIsOpenDetail(false)
      }
    },
    {
      name: '생성', fun: () => {
        setIsOpenMain(false)
        setIsOpenInsert(true)
        setIsOpenDetail(false)
      }
    },
  ]);
  const columns = useRef([
    {
      dataField: "key",
      text: "Name",
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
      dataField: "jobTy",
      text: "직업",
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
  ]);

  useEffect(() => {
    if (!isOpenInsert && !isOpenDetail) {
      listSelect(setDataList, searchDate)
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
        <SimpleHeader name="환자 케이스" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {isOpenMain ?
                  <List dataList={dataList} info={info} columns={columns.current} title={"환자정보"} contents={"생성된 환자 정보 입니다."}
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
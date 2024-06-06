import React, {useEffect, useRef, useState} from "react";
import Insert from "../insert";
import Detail from "../detail";
import {listSelect} from "./list";
import SimpleHeader from "../../../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import List from "../../../../components/List";

export default function SpecialNote() {

  const info = useRef('')
  const [dataList, setDataList] = useState([])
  const [isOpenMain, setIsOpenMain] = useState(true);
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [menu, setMenu] = useState([
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
  ]);

  const columns = useRef([
    {
      dataField: "key",
      text: "KEY",
      sort: true,
    },
    {
      dataField: "content",
      text: "내용",
      sort: true,
    },
  ]);

  useEffect(() => {
    listSelect(dataList, setDataList);
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
                  <List dataList={dataList} info={info} columns={columns.current} title={"특이사항"}
                        contents={"환자케이스에 주어질 특이사항 입니다."}
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

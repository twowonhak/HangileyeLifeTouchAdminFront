import React, {useEffect, useRef, useState} from "react";
import listSelect from "./list";
import SimpleHeader from "../../../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import QuestionInsert from "../insert";
import List from "../../../../components/List";
import ExampleList from "../../example/list_questionDetail";


export default function QuestionList() {

  const info = useRef('')
  const [searchDate, setSearchDate] = useState({useDate: ""})
  const [dataList, setDataList] = useState([])
  const [isOpenMain, setIsOpenMain] = useState(true);
  const [isOpenQuestionInsert, setIsOpenQuestionInsert] = useState(false);
  const [isOpenExampleInsert, setIsOpenExampleInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [alert, setAlert] = useState(null);
  const [menu, setMenu] = useState([
    {
      name: '메인', fun: () => {
        setIsOpenMain(true)
        setIsOpenQuestionInsert(false)
        setIsOpenExampleInsert(false)
        setIsOpenDetail(false)
      }
    },
    {
      name: '질문 등록', fun: () => {
        setIsOpenMain(false)
        setIsOpenQuestionInsert(true)
        setIsOpenExampleInsert(false)
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
      text: "질문 내용",
      sort: true,
    },
    {
      dataField: "useStrDat",
      text: "적용일자-시작",
      sort: true,
    },
    {
      dataField: "useEndDat",
      text: "적용일자-마감",
      sort: true,
    },
  ]);

  useEffect(() => {
    if (!isOpenQuestionInsert && !isOpenExampleInsert && !isOpenDetail) {
      listSelect(setDataList, searchDate)
    }
  }, [isOpenQuestionInsert, isOpenExampleInsert, isOpenDetail])


  const setIsOpenDetailFun = () => {
    setIsOpenMain(false)
    setIsOpenQuestionInsert(false)
    setIsOpenDetail(true)
  }

  const setIsOpenMainFun = () => {
    setIsOpenMain(true)
    setIsOpenQuestionInsert(false)
    setIsOpenDetail(false)
  }

  return (
      <>
        <SimpleHeader name="질문케이스" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {isOpenMain ?
                  <List dataList={dataList} info={info} columns={columns.current} title={"질문 정보"}
                        contents={"등록된 질문 정보 입니다."}
                        setIsOpenDetailFun={setIsOpenDetailFun}/> : null}
              {isOpenQuestionInsert ?
                  <QuestionInsert setIsOpenMainFun={setIsOpenMainFun}/> : null}
              {isOpenDetail ?
                  <ExampleList queInfo={info.current} setIsOpenMainFun={setIsOpenMainFun}/> : null}
            </div>
          </Row>
        </Container>
      </>
  )
}
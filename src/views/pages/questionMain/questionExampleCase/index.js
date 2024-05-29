import React, {useEffect, useRef, useState} from "react";
import listSelect from "./questionExampleCase";
import inputData from "../../../../utiles/input/inputData";
import ReactBSAlert from "react-bootstrap-sweetalert";
import SimpleHeader from "../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import Main from "./main";
import QuestionInsert from "./question/insert";
import ExampleInsert from "./example/insert";
import ExampleDetail from "./example/detail";


export default function QuestionExampleCase() {

  const [searchDate, setSearchDate] = useState({useDate: ""})
  const [dataList, setDataList] = useState([])
  const [isOpenMain, setIsOpenMain] = useState(true);
  const [isOpenQuestionInsert, setIsOpenQuestionInsert] = useState(false);
  const [isOpenExampleInsert, setIsOpenExampleInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [alert, setAlert] = React.useState(null);
  const info = useRef('')
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
      name: '질문 생성', fun: () => {
        setIsOpenMain(false)
        setIsOpenQuestionInsert(true)
        setIsOpenExampleInsert(false)
        setIsOpenDetail(false)
      }
    },
  ]);

  useEffect(() => {
    if (!isOpenQuestionInsert && !isOpenExampleInsert && !isOpenDetail) {
      listSelect(setDataList, searchDate)
    }
  }, [isOpenQuestionInsert, isOpenExampleInsert, isOpenDetail])


  const onInputData = (e) => {
    inputData(e, searchDate, setSearchDate)
  }


  function alertTest() {
    setAlert(
        <ReactBSAlert
            success
            style={{display: "block", marginTop: "-100px"}}
            title="Good job!"
            onConfirm={() => setAlert(null)}
            onCancel={() => setAlert(null)}
            confirmBtnBsStyle="info"
            btnSize=""
        >
          Copied to clipboard!
        </ReactBSAlert>
    );
  }

  return (
      <>
        {alert}
        <SimpleHeader name="질문케이스" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {isOpenMain ?
                  <Main dataList={dataList}/> : null}
              {isOpenQuestionInsert ?
                  <QuestionInsert setIsOpen={setIsOpenQuestionInsert}/> : null}
              {isOpenDetail ?
                  <ExampleDetail info={info.current} setIsOpen={setIsOpenDetail}/> : null}
            </div>
          </Row>
        </Container>
      </>
  )
}
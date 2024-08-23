import React, {useRef, useState} from "react";
import SimpleHeader from "../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import PatientCase from "./patientCase";
import QuestionResult from "./questionResult";

export default function Result({}) {
  const codeInfo = useRef();
  const [alert, setAlert] = useState();
  const [isOpenPatientCase, setIsOpenPatientCase] = useState(true);
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);

  const menu = [
    {
      name: '환자 검색', fun: () => {
        isOpenPatientCaseFun()
      }
    },
  ]

  function isOpenPatientCaseFun() {
    setIsOpenPatientCase(true)
    setIsOpenQuestion(false)
  }

  function isOpenQuestionFun() {
    setIsOpenPatientCase(false)
    setIsOpenQuestion(true)
  }

  return (
      <>
        {alert}
        <SimpleHeader name="최종 문진표" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {
                isOpenPatientCase
                    ? <PatientCase codeInfo={codeInfo} setAlert={setAlert} isOpenQuestionFun={isOpenQuestionFun}/>
                    : null
              }
              {
                isOpenQuestion
                    ? <QuestionResult codeInfo={codeInfo} setAlert={setAlert}/>
                    : null
              }
            </div>
          </Row>
        </Container>
      </>
  )
}
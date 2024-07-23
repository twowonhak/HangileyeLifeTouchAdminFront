import React, {memo, useRef, useState} from "react";
import {CodeList} from "./codeList";
import SimpleHeader from "../../../../components/Headers/SimpleHeader";
import {Container, Row} from "reactstrap";
import DetailList from "./detailList";

export default memo(function Question() {

  const codeInfo = useRef();
  const [alert, setAlert] = useState();
  const [isOpenList, setIsOpenList] = useState(true);
  const [isOpenDetailList, setIsOpenDetailList] = useState(false);

  const menu = [
    {
      name: '코드 목록', fun: () => {
        isOpenListFun()
      }
    },
  ]

  function isOpenListFun() {
    setIsOpenList(true)
    setIsOpenDetailList(false)
  }

  function isOpenDetailListFun() {
    setIsOpenList(false)
    setIsOpenDetailList(true)
  }

  return (
      <>
        {alert}
        <SimpleHeader name="질문" parentName="문진표" menu={menu}/>
        <Container className="mt--6" fluid>
          <Row>
            <div className="col">
              {
                isOpenList
                    ? <CodeList codeInfo={codeInfo} setAlert={setAlert} isOpenDetailListFun={isOpenDetailListFun}/>
                    : null
              }
              {
                isOpenDetailList
                    ? <DetailList codeInfo={codeInfo} setAlert={setAlert}/>
                    : null
              }
            </div>
          </Row>
        </Container>
      </>
  )
})
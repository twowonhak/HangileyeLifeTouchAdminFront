import React, {memo, useState} from "react";
import {onSave} from "./insert";
import useDidMountEffect from "../../../../../../hook/useDidMountEffect";
import inputData from "../../../../../../utiles/input/inputData";
import inputCheck from "../../../../../../utiles/input/inputCheck";

export default memo(function ExampleInsert({isOpen, setIsOpen}) {

  const [data, setData] = useState({
    key        : "",
    queKey     : "",
    queTxt     : "",
    queSort    : "",
    exaKey     : "",
    exaTy      : "",
    exaTxt     : "",
    exaSort    : "",
    useStrDay  : "",
    useEndDay  : "",
    delYn      : "",
    crDtime    : "",
    crUserId   : "",
    crUserIp   : "",
    delDtime   : "",
    delUserId  : "",
    delUserIp  : ""
  })


  useDidMountEffect(() => {
    if (isOpen) {
    }
  }, [isOpen])

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  const handleChange = (e) => {
    inputCheck(e, data, setData)
  };

  if (!isOpen)
    return null;
  else
    return (
        <>
          <h1>보기생성</h1>
          <button onClick={() => setIsOpen(false)}>창닫기</button>
          <form onSubmit={(e) => {
            onSave(e, data, setIsOpen)
          }}>
            <div>
              <h3>질문내용</h3>
              <label><input type="checkbox" value={""}/></label>
            </div>

            <div>
              <h3>적용 기간</h3>
              <label>시작</label><input type="date" name={"useStrDat"} onChange={onInputData}/> ~
              <label>종료</label><input type="date" name={"useEndDat"} onChange={onInputData}/>
            </div>

            <button type="submit">저장</button>
          </form>
        </>
    )
})

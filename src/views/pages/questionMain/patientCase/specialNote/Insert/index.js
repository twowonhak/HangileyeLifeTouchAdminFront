import React, {memo, useState} from "react";
import {onSave} from "./insert";
import inputData from "../../../../../../utiles/input/inputData";

export default memo(function Insert({isOpen, setIsOpen}) {

  const [data, setData] = useState({
    "content": ""
  })

  const onInputData = (e) => {
    inputData(e, data, setData)
  }

  if (!isOpen)
    return null;
  else
    return (
        <>
          <button onClick={() => setIsOpen(false)}>창닫기</button>
          <form onSubmit={(e) => {onSave(e, data, setIsOpen)}}>
            <label>내용</label>
            <input type="content" name="content" value={data.content} maxLength={60} onChange={onInputData}/>
            <button type="submit">저장</button>
          </form>

        </>
    )
})
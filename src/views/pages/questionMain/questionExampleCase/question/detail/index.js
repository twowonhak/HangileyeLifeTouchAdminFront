import {memo, useState} from "react";
import {onDelete} from "./detail";

export default memo(function QuestionDetail({info, isOpen, setIsOpen}) {

  const [data, setData] = useState();


  if (!isOpen)
    return null;
  else
    return (
        <>
          <h1>{info.key}</h1>
          <button onClick={() => onDelete(info,setIsOpen)}>삭제</button>
          <button onClick={() => setIsOpen(false)}>창닫기</button>
        </>
    )
})
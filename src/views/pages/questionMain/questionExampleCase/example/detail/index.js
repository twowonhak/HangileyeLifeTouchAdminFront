import {memo, useState} from "react";
import {onDelete} from "./detail";

export default memo(function ExampleDetail({info, setIsOpen}) {

  const [data, setData] = useState();

    return (
        <>
          <h1>{info.key}</h1>
          <button onClick={() => onDelete(info,setIsOpen)}>삭제</button>
        </>
    )
})
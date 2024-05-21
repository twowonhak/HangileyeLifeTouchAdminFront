import {memo} from "react";

export default memo(function CaseInsert({isOpen, setIsOpen}) {
  if (!isOpen)
    return null;
  else
    return (
        <>
          <button onClick={()=>{setIsOpen(false)}}>창닫기</button>
        </>
    )
})
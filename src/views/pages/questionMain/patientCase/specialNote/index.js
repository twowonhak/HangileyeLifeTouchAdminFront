import {useEffect, useState} from "react";
import Insert from "./Insert";
import {listSelect, onDelete} from "./specialNote";
import {Link} from "react-router-dom";

export default function SpecialNote() {

  const [dataList, setDataList] = useState([])
  const [isOpenInsert, setIsOpenInsert] = useState(false);

  useEffect(() => {
    listSelect(dataList, setDataList);
  }, [isOpenInsert])

  return (
      <>
        <Insert isOpen={isOpenInsert} setIsOpen={setIsOpenInsert}/>
        <Link to={"/questionMain/patientCase"}>뒤로가기</Link>
        <button onClick={()=>{setIsOpenInsert(true)}}>특이사항 생성</button>

        {dataList.map((value, index) => {
          return (
              <div key={index}>
                {value.key}
                {value.content}
                {value.crUserNm}
                <button onClick={()=>{onDelete(value, setDataList)}}>삭제</button>
              </div>
          )
        })}
      </>
  )
}

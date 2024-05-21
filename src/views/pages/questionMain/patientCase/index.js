import Insert from "./insert";
import Detail from "./detail";
import {Link} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import listSelect from "./patientCase";
import inputData from "../../../../utiles/input/inputData";

export default function PatientCase() {

  const [searchDate, setSearchDate] = useState({useDate: ""})
  const [dataList, setDataList] = useState([])
  const [isOpenInsert, setIsOpenInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const info = useRef('')

  useEffect(() => {
    if (!isOpenInsert && !isOpenDetail) {
      listSelect(setDataList, searchDate)
    }
  }, [isOpenInsert, isOpenDetail])

  const onInputData = (e) => {
    inputData(e, searchDate, setSearchDate)
  }

  return (
      <>
        <Insert isOpen={isOpenInsert} setIsOpen={setIsOpenInsert}/>
        <Detail info={info.current} isOpen={isOpenDetail} setIsOpen={setIsOpenDetail}/>

        <Link to={"/questionMain/patientCase/specialNote"}>특이사항</Link>

        <button onClick={() => {
          setIsOpenInsert(true)
        }}>환자 케이스 생성
        </button>

        <label><input type="date" onChange={onInputData}/></label>
        <button onClick={() => {
          listSelect(setDataList, searchDate)
        }}>검색
        </button>

        {dataList.map((value, index) => {
          return (
              <div key={index}>
                {value.key}
                <button onClick={() => {
                  setIsOpenDetail(true)
                  info.current = value
                }}>상세
                </button>
              </div>
          )
        })}

      </>
  )
}
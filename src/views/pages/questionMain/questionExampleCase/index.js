import {useEffect, useRef, useState} from "react";
import listSelect from "./questionExampleCase";
import ExampleInsert from "./example/insert";
import QuestionInsert from "./question/insert";
import ExampleDetail from "./example/detail";
import inputData from "../../../../utiles/input/inputData";

export default function QuestionExampleCase() {

  const [searchDate, setSearchDate] = useState({useDate: ""})
  const [dataList, setDataList] = useState([])
  const [isOpenQuestionInsert, setIsOpenQuestionInsert] = useState(false);
  const [isOpenExampleInsert, setIsOpenExampleInsert] = useState(false);
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  const info = useRef('')

  useEffect(() => {
    if (!isOpenQuestionInsert && !isOpenExampleInsert && !isOpenDetail) {
      listSelect(setDataList, searchDate)
    }
  }, [isOpenQuestionInsert, isOpenExampleInsert, isOpenDetail])

  const onInputData = (e) => {
    inputData(e, searchDate, setSearchDate)
  }

  return (
      <>
        <QuestionInsert isOpen={isOpenQuestionInsert} setIsOpen={setIsOpenQuestionInsert}/>
        <ExampleInsert isOpen={isOpenExampleInsert} setIsOpen={setIsOpenExampleInsert}/>
        <ExampleDetail info={info.current} isOpen={isOpenDetail} setIsOpen={setIsOpenDetail}/>

        <button onClick={() => {
          setIsOpenQuestionInsert(true)
        }}>질문 생성
        </button>
        <button onClick={() => {
          setIsOpenExampleInsert(true)
        }}>보기 생성
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
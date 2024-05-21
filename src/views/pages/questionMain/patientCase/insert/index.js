import React, {memo, useState} from "react";
import {diagListSelect, onSave, specialNoteListSelect} from "./insert";
import useDidMountEffect from "../../../../../hook/useDidMountEffect";
import inputData from "../../../../../utiles/input/inputData";
import inputCheck from "../../../../../utiles/input/inputCheck";

export default memo(function Insert({isOpen, setIsOpen}) {

  const [data, setData] = useState({
    type: "",
    diagCd: "",
    sex: "",
    birth: "",
    preYn: "",
    jobTy: "",
    pagtTy: "",
    specialNote: "",
    useStrDat: "",
    useEndDat: ""
  })

  const [diagList, setDiagList] = useState([]);
  const [specialNoteList, setSpecialNoteList] = useState([]);

  useDidMountEffect(() => {
    if (isOpen) {
      // 진료과 조회
      diagListSelect(setDiagList)
      // 특이사항 조회
      specialNoteListSelect(setSpecialNoteList)
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
          <button onClick={() => setIsOpen(false)}>창닫기</button>
          <form onSubmit={(e) => {
            onSave(e, data, setIsOpen)
          }}>

            <div>
              <h3>진료타입</h3>
              <label><input type="checkbox" name={"type"} value={"N"} onChange={handleChange}/>신환</label>
              <label><input type="checkbox" name={"type"} value={"F"} onChange={handleChange}/>초진</label>
              <label><input type="checkbox" name={"type"} value={"R"} onChange={handleChange}/>재진</label>
            </div>

            <div>
              <h3>진료과</h3>
              {
                diagList.map((value, index) => {
                  return (
                      <div key={index}>
                        <label><input type="checkbox" name={"diagCd"} value={value.diagCd}
                                      onChange={handleChange}/>{value.diagNm}</label>
                      </div>
                  )
                })
              }
            </div>

            <div>
              <h3>생년월일</h3>
              <label><input type="checkbox" name={"birth"} value={"0"} onChange={handleChange}/> 0~9세</label>
              <label><input type="checkbox" name={"birth"} value={"10"} onChange={handleChange}/>10~19세</label>
              <label><input type="checkbox" name={"birth"} value={"20"} onChange={handleChange}/>20~29세</label>
              <label><input type="checkbox" name={"birth"} value={"30"} onChange={handleChange}/>30~39세</label>
              <label><input type="checkbox" name={"birth"} value={"40"} onChange={handleChange}/>40~49세</label>
              <label><input type="checkbox" name={"birth"} value={"50"} onChange={handleChange}/>50~59세</label>
              <label><input type="checkbox" name={"birth"} value={"60"} onChange={handleChange}/>60~69세</label>
              <label><input type="checkbox" name={"birth"} value={"70"} onChange={handleChange}/>70~79세</label>
              <label><input type="checkbox" name={"birth"} value={"80"} onChange={handleChange}/>80~89세</label>
              <label><input type="checkbox" name={"birth"} value={"90"} onChange={handleChange}/>90~99세</label>
              <label><input type="checkbox" name={"birth"} value={"100"} onChange={handleChange}/>100세~</label>
            </div>

            <div>
              <h3>성별</h3>
              <label><input type="checkbox" name={"sex"} value={"M"} onChange={handleChange}/>남</label>
              <label><input type="checkbox" name={"sex"} value={"F"} onChange={handleChange}/>여</label>
            </div>

            <div>
              <h3>임신여부</h3>
              <label><input type="checkbox" name={"preYn"} value={"Y"} onChange={handleChange}/>임신중</label>
            </div>

            <div>
              <h3>직업타입</h3>
              <label><input type="checkbox" value={""}/></label>
            </div>

            <div>
              <h3>과거력</h3>
              <label><input type="checkbox" value={"1"} name={"pagtTy"} onChange={handleChange}/>당뇨</label>
              <label><input type="checkbox" value={"2"} name={"pagtTy"} onChange={handleChange}/>고혈압</label>
              <label><input type="checkbox" value={"3"} name={"pagtTy"} onChange={handleChange}/>저혈압</label>
              <label><input type="checkbox" value={"4"} name={"pagtTy"} onChange={handleChange}/>백내장</label>
              <label><input type="checkbox" value={"5"} name={"pagtTy"} onChange={handleChange}/>녹내장</label>
              <label><input type="checkbox" value={"6"} name={"pagtTy"} onChange={handleChange}/>라식/라섹</label>
            </div>

            <div>
              <h3>특이사항</h3>
              {
                specialNoteList.map((value, index) => {
                  return (
                      <div key={index}>
                        <label><input name={"specialNote"} type="checkbox" value={value.key}
                                      onChange={handleChange}/>{value.content}</label>
                      </div>
                  )
                })
              }
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

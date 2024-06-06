/*
  날짜 자동 하이픈 입력 함수

  ( <input maxLength={10}>  <--- 입력 필수)

  @ data : state
  @ setData : setState
 */

export default function inputDate(e, data, setData) {
  const {name, value} = e.currentTarget;

  let text = value.replace(/[^0-9]/g, '')
  let tempDate;

  if(text.length < 5){
    tempDate = text
  }else if(text.length<7){
    tempDate = `${text.substr(0,4)}-${text.substr(4, 2)}`
  }else {
    tempDate = `${text.substr(0,4)}-${text.substr(4, 2)}-${text.substr(6)}`
  }

  setData({
    ...data,
    [name]: tempDate
  });
}
/*
  데이트피커 클릭 시 데이터저장

  @ data : state
  @ setData : setState
  @ objName : name명
  @ date : 받아오는 날짜
*/

export default function handleDatetimeChange(data, setData, objName, date){

  setData({
    ...data,
    [objName]: date
  });
}
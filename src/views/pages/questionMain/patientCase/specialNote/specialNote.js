import {specialNoteDeleteApi, specialNoteListSelectApi} from "../../../../../api/specialNoteApi";

export function listSelect(dataList, setDataList) {
  specialNoteListSelectApi().then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      console.log(res)
      alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(data, setDataList) {
  if (window.confirm(`${data.content} 삭제 하시겠습니까?`)) {
    specialNoteDeleteApi(data).then((res) => {
      if (res.resultCode === "0000") {
        setDataList(res.data)
      } else {
        console.log(res)
        alert(res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  }
}
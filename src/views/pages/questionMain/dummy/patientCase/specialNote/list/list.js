import {requestApi} from "../../../../../../../api/mainApi";

export function listSelect(dataList, setDataList) {
  requestApi("/specialNote/listSelectApi").then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      
      alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(data, setDataList) {
  if (window.confirm(`${data.content} 삭제 하시겠습니까?`)) {
    requestApi("/specialNote/deleteApi",data).then((res) => {
      if (res.resultCode === "0000") {
        setDataList(res.data)
      } else {
        
        alert(res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  }
}
import {deleteApi, listSelectApi} from "../../../../../../api/patientCaseApi";

export function detail(key,setData){
  listSelectApi(key).then((res) => {
    if (res.resultCode === "0000") {
      console.log(res)
      setData(res.data)
    } else {
      console.log(res)
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function onDelete(data,setIsOpen){
  if (window.confirm(`삭제 하시겠습니까?`)) {
    const infoData = {key : data.key}
    deleteApi(infoData).then((res) => {
      if (res.resultCode === "0000") {
        setIsOpen(false)
      } else {
        console.log(res)
        alert(res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  }
}
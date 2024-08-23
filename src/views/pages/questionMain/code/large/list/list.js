import {requestApi} from "../../../../../../api/mainApi";

export function listSelect(setDataList){
  let reqData = {comm : 'Y'}
  requestApi("/question/queCode/ctgListSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data.lrgCtg)
    } else {
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}
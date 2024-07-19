import {requestApi} from "../../../../../../api/mainApi";

export function listSelect(setDataList){
  requestApi("/question/queCode/ctgListSelectApi").then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data.lagCtg)
    } else {
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}
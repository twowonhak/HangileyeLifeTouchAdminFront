import {requestApi} from "../../../../../../../api/mainApi";

export default function listSelect(setDataList, searchDate){
  let reqData = {useYn : searchDate}
  requestApi("/question/listSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data)
    } else {
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}
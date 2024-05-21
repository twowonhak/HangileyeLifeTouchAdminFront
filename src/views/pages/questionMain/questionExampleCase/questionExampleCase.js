import {listSelectApi} from "../../../../api/patientCaseApi";

export default function listSelect(setDataList, searchDate){
  listSelectApi(searchDate).then((res) => {
    if (res.resultCode === "0000") {
      console.log(res)
      setDataList(res.data)
    } else {
      console.log(res)
      // alert(res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

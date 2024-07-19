import {requestApi} from "../../../../../../../api/mainApi";

export default function listSelect(info, setDataList) {
  const data = {key:info}
  requestApi("/example/listSelectApi", data).then((res) => {
    if (res.resultCode === "0000") {
      setDataList(res.data !== null ? res.data : [])
    } else {
      
    }
  }).catch((e) => {
    console.error(e)
  })
}

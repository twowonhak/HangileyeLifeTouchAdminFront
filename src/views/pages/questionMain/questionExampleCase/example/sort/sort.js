import warning from "../../../../components/Alert/SweetAlert/warning";
import {requestApi} from "../../../../../../api/mainApi";
import success from "../../../../components/Alert/SweetAlert/success";

export function sortList(key, setData, setIsOpenAlert) {
  const data = {key : key}
  requestApi("/example/listSelectApi", data).then((res) => {
    if (res.resultCode === "0000") {
      setData(res.data)
      console.log('1111111111111111111111->',res.data)
    } else {
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}


export function update(dataList, setIsOpenAlert) {
  requestApi("/example/sortUpdateApi", dataList).then((res) => {
    if (res.resultCode === "0000") {
      success(setIsOpenAlert, "순서 변경 완료 되었습니다.")
    } else {
      warning(setIsOpenAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}


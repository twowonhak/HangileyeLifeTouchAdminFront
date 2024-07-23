import {requestApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";
import info from "../../../../components/Alert/SweetAlert/info";

export function sortListSelect(setSortDataList,  reqData, setAlert){
  requestApi("/question/question/listSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      setSortDataList(res.data)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function update(dataList, setAlert) {
  requestApi("/question/question/sortUpdateApi", dataList).then((res) => {
    if (res.resultCode === "0000") {
      info(setAlert, `순서 변경 완료 되었습니다. \n 순서를 확인해 주세요,`)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}
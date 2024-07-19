import {requestApi} from "../../../../../../../../api/mainApi";
import info from "../../../../../../components/Alert/SweetAlert/info";
import warning from "../../../../../../components/Alert/SweetAlert/warning";

export function update(dataList, setAlert) {

  requestApi("/question/queCode/midCtgSortUpdateApi", dataList).then((res) => {
    if (res.resultCode === "0000") {
      info(setAlert, `순서 변경 완료 되었습니다. \n 순서를 확인해 주세요,`)
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

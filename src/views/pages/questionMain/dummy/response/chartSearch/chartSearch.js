import {requestApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function chartSearchFun(chartSearch, chartNo, setAlert, setIsOpenResultFun) {
  if (chartSearch.name !== '') {
    requestApi("/common/chartNoSelectApi", chartSearch).then((res) => {
      if (res.resultCode === "0000") {
        chartNo.current = res.data
        setIsOpenResultFun()
      } else {
        warning(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  } else {
    warning(setAlert, '차트번호를 입력 해주세요.')
  }
}
import {requestApi, requestExcelDownloadApi} from "../../../../../../api/mainApi";
import warning from "../../../../components/Alert/SweetAlert/warning";

export function excelExport(search, setAlert) {

  if (search.searchStart !== "" && search.searchEnd !== "") {

    requestExcelDownloadApi("/question/result/stateExcelExportApi", search).then((res) => {
      if (res === null) {
        warning(setAlert, "해당 검색 조건에 데이터가 없습니다.")
      }
    }).catch((e) => {
      console.error(e)
    })
  } else {
    warning(setAlert, "검색 일자를 선택 해주세요,")
  }
}
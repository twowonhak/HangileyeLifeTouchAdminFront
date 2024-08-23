import {requestApi} from "../../../api/mainApi";
import warning from "../components/Alert/SweetAlert/warning";
import info from "../components/Alert/SweetAlert/info";

export function search(e, setSearchInfo, setUseAuthority, setUnUseAuthority, setAlert) {
  let reqData = {searchInfo: e.target.value}

  requestApi("/authority/authority/searchSelectApi", reqData).then((res) => {
    if (res.resultCode === "0000") {
      if (Object.keys(res.data).length === 0) {
        setSearchInfo({
          id: '',
          name: '',
          dept: ''
        })
        setUseAuthority([])
        setUnUseAuthority([])
      } else {
        setSearchInfo(res.data.info)
        setUseAuthority(res.data.use)
        setUnUseAuthority(res.data.unUse)
      }
    } else {
      warning(setAlert, res.resultMessage)
    }
  }).catch((e) => {
    console.error(e)
  })
}

export function handleDropItem(item, list1, setList1, list2, setList2) {
  if (!list1.some((i) => i.menuCd === item.menuCd)) {
    setList1([...list1, item])
  }
  setList2(list2.filter(obj => obj.menuCd !== item.menuCd))
}

export function menuSave(searchInfo, useAuthority, setAlert){
  if (searchInfo.id !== "") {
    let reqData = {
      userId : searchInfo.id,
      menuArr : useAuthority.map(item => item.menuCd)
    }
    requestApi("/authority/authority/menuSaveApi", reqData).then((res) => {
      if (res.resultCode === "0000") {
        info(setAlert, "권한 변경 완료 되었습니다.")
      } else {
        warning(setAlert, res.resultMessage)
      }
    }).catch((e) => {
      console.error(e)
    })
  } else {
    warning(setAlert, "직원 선택이 되지 않았습니다.")
  }
}
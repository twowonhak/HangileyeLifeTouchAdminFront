import {requestApi} from "../../../api/mainApi";

export function mainMenuSelect(setMenuData){
  requestApi("/common/mainMenuSelectApi").then((res) => {
    if (res.resultCode === "0000") {
      setMenuData(res.data)
    } else {
    }
  }).catch((e) => {
    console.error(e)
  })
}
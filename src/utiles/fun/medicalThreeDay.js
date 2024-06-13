/*
  병원진료일 기준 (3일) 거르기
  공휴일 포함
 */

import {holidaySelectApi} from "../../api/utilApi";

export default function medicalThreeDay() {

  // 0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
  let toDayWeek = new Date().getDay();
  console.log(toDayWeek)


  // 주말 제외
  if (toDayWeek !== 5 || toDayWeek !== 6) {
    // 병원 공휴일 거르기
    holidaySelectApi().then((res) => {
      if (res.resultCode === "0000") {
        return
      } else {
        console.error(res)
      }
    }).catch((e) => {
      console.error(e)
    })
  }


  return null;
}

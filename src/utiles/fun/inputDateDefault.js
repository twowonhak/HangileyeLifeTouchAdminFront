import moment from "moment";
import 'moment/locale/ko';	//대한민국

export function inputDateDefault() {
  const nowTime = moment().format('YYYY-MM-DD');
  return new Date(nowTime)
}

export function inputDateYearDefault() {
  const nowTime = moment().format('YYYY');
  return nowTime.toString()
}

export function inputDateMonthDefault() {
  const nowTime = moment().format('MM');
  return nowTime.toString()
}

export function inputDateDayDefault() {
  const nowTime = moment().format('DD');
  return nowTime.toString()
}

export function inputDateDefaultText() {
  let today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);
  return year + '년' + month + '월' + day + '일'
}

export function inputDateMonthDefaultText() {
  let today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  return year + '년' + month + '월'
}
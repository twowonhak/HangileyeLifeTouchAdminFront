/*
  체크박스
  중복값 제거 및 코드 사이에 '/' 문자 입력
*/

import removeFirstCharIfMatch from "./removeFirstChar";

export default function inputCheck(e, data, setData) {

  let {name, value} = e.currentTarget;
  let res
  if (e.currentTarget.checked) {
    res = data[name].replaceAll(value, '')
    res = res.replaceAll('//', '');
    res = res + '/' + value
    res = removeFirstCharIfMatch(res, '/')
  } else {
    res = data[name].replaceAll(value, '')
    res = res.replaceAll('//', '');
    res = removeFirstCharIfMatch(res, '/')
  }

  setData({
    ...data,
    [name]: res
  });

}
/*
  체크박스
  중복값 제거 및 코드 사이에 '/' 문자 입력
*/

import removeFirstCharIfMatch from "./removeFirstChar";

export default function inputCheck(e, data, setData) {

  let {name, value} = e.currentTarget;
  let res
  let arr // 문자열을 '/' 기준으로 분리하여 배열로 만듭니다
  let index

  if (e.currentTarget.checked) {
    res = data[name].replaceAll(value, '')
    res = res.replaceAll('//', '');
    res = res + '/' + value
    res = removeFirstCharIfMatch(res, '/')
    arr = res.split('/');
    arr.sort();
    res = arr.join('/');
  } else {
    arr = data[name].split('/');
    index = arr.indexOf(value)
    if (index !== -1) {
      arr.splice(index, 1);
    }
    res = arr.join('/');
  }

  setData({
    ...data,
    [name]: res
  });

}
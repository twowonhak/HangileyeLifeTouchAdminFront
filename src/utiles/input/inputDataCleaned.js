/*
  입력 데이터 state에 담아 주는 함수

  @ data : state
  @ setData : setState
 */

export default function inputDataCleaned(e, data, setData) {
  const {name, value} = e.currentTarget;

  let cleanedString = value.replace(/[`0-9~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim, '');

  setData({
    ...data,
    [name]: cleanedString
  });
}
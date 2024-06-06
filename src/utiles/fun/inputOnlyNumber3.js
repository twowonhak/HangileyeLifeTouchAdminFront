/*
  숫자 "." 입력 가능 함수
 */
export default function inputOnlyNumber3(e, data, setData) {

  const {name, value} = e.currentTarget;

  let num;

  // 숫자 정규식
  num = value.replace(/[^0-9.]/g, '');

  setData({
    ...data,
    [name]: num
  });
}
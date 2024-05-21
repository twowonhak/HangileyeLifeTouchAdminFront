/*
  문자 및 기호 금지, 숫자만 입력 가능 함수, 맨 앞에 "0" 도 제거
 */

export default function inputOnlyNumber(e, data, setData) {

  const {name, value} = e.currentTarget;

  let num;

  // 숫자 정규식
  num = value.replace(/[^0-9]/g, '');

  // 맨앞에 '0' 제거 ( 숫자 입력 시 첫 자리가 '0' 못오게 제거)
  num = num.replace(/(^0+)/, "");

  setData({
    ...data,
    [name]: num
  });
}
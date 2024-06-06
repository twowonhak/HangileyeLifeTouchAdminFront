/*
   전화번호를 입력할 때 자동으로 하이픈(-)을 삽입
 */

export default function inputPhoneNumber(e, data, setData) {

  const {name, value} = e.currentTarget;

  // 숫자만 추출
  let numbers = value.replace(/\D/g, '');

  // 숫자를 적절한 형태로 변환 (예: 010-1234-5678)
  let char = {3:'-', 7:'-'};
  let phone = '';
  for (let i = 0; i < numbers.length; i++) {
    phone += (char[i] || '') + numbers[i];
  }

  setData({
    ...data,
    [name]: phone
  });
}
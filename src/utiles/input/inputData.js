/*
  입력 데이터 state에 담아 주는 함수

  @ data : state
  @ setData : setState
 */

export default function inputData(e, data, setData) {
  const {name, value} = e.currentTarget;
  setData({
    ...data,
    [name]: value
  });
}
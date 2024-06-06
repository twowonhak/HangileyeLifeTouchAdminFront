/*
  Checkbox 함수

  @ data : state
  @ setData : setState
 */

export default function inputCheckbox(e, data, setData) {
  const {name,checked} = e.currentTarget;
  setData({
    ...data,
    [name]: checked
  });
}
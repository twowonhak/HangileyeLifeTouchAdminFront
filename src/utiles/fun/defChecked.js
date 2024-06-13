export default function defChecked(res, value) {
  let arr

  if (res !== undefined) {
    try {
      arr = res.split('/');
      return arr.includes(value);
    } catch (e) {
      return false
    }
  } else return false
}
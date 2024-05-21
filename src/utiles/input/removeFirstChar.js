export default function removeFirstCharIfMatch(str, char) {
  // 문자열의 맨 앞에 특정 문자가 있는지 확인합니다.
  if (str.charAt(0) === char) {
    // 특정 문자와 같다면 첫 번째 문자를 제외한 나머지 문자열을 반환합니다.
    return str.slice(1);
  }

  // 문자열의 마지막 문자가 특정 문자인지 확인합니다.
  if (str.charAt(str.length - 1) === char) {
    // 특정 문자와 같다면 마지막 문자를 제외한 나머지 문자열을 반환합니다.
    return str.slice(0, -1);
  }

  return str;
}
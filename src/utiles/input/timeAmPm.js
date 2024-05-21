/*
  12:00 기준으로 오전 오후 분리

  받아오는 값 10:00 형식으로 받아야함
 */

export default function timeAmPm(time) {
  // 주어진 문자열을 Date 객체로 파싱합니다.
  const hours = new Date("2000-01-01T" + time + ":00").getHours();

  // 시간이 12시보다 작으면 오전, 그렇지 않으면 오후로 판단합니다.
  return hours < 12 ? "am" : "pm"
}
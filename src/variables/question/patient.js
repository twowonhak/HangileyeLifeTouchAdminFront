var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();
var d = today.getDate();
var id = 'patient'

const type = [
  {
    title: "신환",
    name: "type",
    value: "N",
  },
  {
    title: "초진",
    name: "type",
    value: "F",
  },
  {
    title: "재진",
    name: "type",
    value: "R",
  },
];

const birth = [
  {
    title: "신생아(출생일~28일)",
    name: "birth",
    value: "0",
  },
  {
    title: "영아(28일~24개월)",
    name: "birth",
    value: "1",
  },
  {
    title: "어린이(24개월~12세)",
    name: "birth",
    value: "2",
  },
  {
    title: "청소년(13세~18세)",
    name: "birth",
    value: "3",
  },
  {
    title: "성년(19세~64세)",
    name: "birth",
    value: "4",
  }, {
    title: "노인(65세 이상)",
    name: "birth",
    value: "5",
  }
]

const sex = [
  {
    title: "남",
    name: "sex",
    value: "M",
  },
  {
    title: "여",
    name: "sex",
    value: "F",
  },
]

const pagtTy = [
  {
    title: "당뇨",
    name: "pagtTy",
    value: "1",
  },
  {
    title: "고혈압",
    name: "pagtTy",
    value: "2",
  },
  {
    title: "저혈압",
    name: "pagtTy",
    value: "3",
  },
  {
    title: "백내장",
    name: "pagtTy",
    value: "4",
  },
  {
    title: "녹내장",
    name: "pagtTy",
    value: "5",
  },
  {
    title: "라식/라섹",
    name: "pagtTy",
    value: "6",
  },
  {
    title: "기타",
    name: "pagtTy",
    value: "7",
  },
]

export {type, birth, sex, pagtTy};


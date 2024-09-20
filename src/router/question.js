import ResponseList from "../views/pages/questionMain/dummy/response";
import Large from "../views/pages/questionMain/code/large";
import Question from "../views/pages/questionMain/question"
import Result from "../views/pages/questionMain/result";
import Stats from "../views/pages/questionMain/dummy/response/stats";

const routes = [
  {
    path: "/result",
    name: "최종 문진표",
    icon: "ni ni-single-02 text-info",
    component: <Result />,
    layout: "/questionMain",
  },
  // {
  //   path: "/large",
  //   name: "코드",
  //   icon: "ni ni-atom text-black",
  //   component: <Large />,
  //   layout: "/questionMain",
  // },
  {
    path: "/case",
    name: "질문",
    icon: "ni ni-archive-2 text-red",
    component: <Question />,
    layout: "/questionMain",
  },
  {
    path: "/response",
    name: "환자 문진 답변",
    icon: "ni ni-notification-70 text-pink",
    component: <ResponseList />,
    layout: "/questionMain",
  },
  {
    path: "/stats",
    name: "문진 결과 통계",
    icon: "ni ni-credit-card text-black",
    component: <Stats />,
    layout: "/questionMain",
  },



  //
  //
  // {
  //   path: "/result",
  //   name: "최종 문진표",
  //   icon: "ni ni-atom text-black",
  //   component: <Result />,
  //   layout: "/questionMain",
  // },
  // {
  //   path: "/case",
  //   name: "케이스",
  //   icon: "ni ni-archive-2 text-red",
  //   component: <Case />,
  //   layout: "/questionMain",
  // },
  // {
  //   collapse: true,
  //   name: "환자 케이스",
  //   icon: "ni ni-single-02 text-info",
  //   views: [
  //     {
  //       path: "/patientCase/patient",
  //       name: "환자",
  //       miniName: "P",
  //       component: <PatientCase />,
  //       layout: "/questionMain",
  //     },
  //     {
  //       path: "/patientCase/specialNote",
  //       name: "특이사항",
  //       miniName: "S",
  //       component: <SpecialNote />,
  //       layout: "/questionMain",
  //     },
  //   ],
  // },
  // {
  //   path: "/questionExampleCase/question",
  //   name: "질문 케이스",
  //   icon: "ni ni-books text-green",
  //   component: <QuestionList />,
  //   layout: "/questionMain",
  // },
  // {
  //   path: "/response",
  //   name: "환자 답변 조회",
  //   icon: "ni ni-notification-70 text-pink",
  //   component: <ResponseList />,
  //   layout: "/questionMain",
  // },
];

export default routes;

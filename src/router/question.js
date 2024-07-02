import SpecialNote from "../views/pages/questionMain/patientCase/specialNote/list";
import PatientCase from "../views/pages/questionMain/patientCase/patient";
import QuestionList from "../views/pages/questionMain/questionExampleCase/question/list";
import ResponseList from "../views/pages/questionMain/response";
import Case from "../views/pages/questionMain/case";
import Result from "../views/pages/questionMain/result";

const routes = [
  {
    path: "/result",
    name: "최종 문진표",
    icon: "ni ni-atom text-black",
    component: <Result />,
    layout: "/questionMain",
  },
  {
    path: "/case",
    name: "케이스",
    icon: "ni ni-archive-2 text-red",
    component: <Case />,
    layout: "/questionMain",
  },
  {
    collapse: true,
    name: "환자 케이스",
    icon: "ni ni-single-02 text-info",
    views: [
      {
        path: "/patientCase/patient",
        name: "환자",
        miniName: "P",
        component: <PatientCase />,
        layout: "/questionMain",
      },
      {
        path: "/patientCase/specialNote",
        name: "특이사항",
        miniName: "S",
        component: <SpecialNote />,
        layout: "/questionMain",
      },
    ],
  },
  {
    path: "/questionExampleCase/question",
    name: "질문 케이스",
    icon: "ni ni-books text-green",
    component: <QuestionList />,
    layout: "/questionMain",
  },
  {
    path: "/response",
    name: "환자 답변 조회",
    icon: "ni ni-notification-70 text-pink",
    component: <ResponseList />,
    layout: "/questionMain",
  },
];

export default routes;

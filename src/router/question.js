import QuestionMain from "../views/pages/questionMain";
import SpecialNote from "../views/pages/questionMain/patientCase/specialNote";
import PatientCase from "../views/pages/questionMain/patientCase";

const routes = [
  {
    path: "/case",
    name: "케이스",
    icon: "ni ni-archive-2 text-red",
    component: <QuestionMain />,
    layout: "/questionMain",
  },
  {
    collapse: true,
    name: "환자 케이스",
    icon: "ni ni-single-02 text-info",
    views: [
      {
        path: "/patientCase",
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
    path: "/charts",
    name: "질문 케이스",
    icon: "ni ni-books text-green",
    component: <QuestionMain />,
    layout: "/questionMain/question",
  },
  {
    path: "/charts",
    name: "환자 답변 조회",
    icon: "ni ni-notification-70 text-pink",
    component: <QuestionMain />,
    layout: "/questionMain",
  },
];

export default routes;

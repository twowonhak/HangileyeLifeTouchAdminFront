import Stock from "../views/pages/stockMain/stock";

const routes = [
  // {
  //   path: "/stats",
  //   name: "통계",
  //   icon: "ni ni-chart-bar-32 text-blue",
  //   component: <Stats/>,
  //   layout: "/stockMain",
  // },
  {
    path: "/stock",
    name: "재고",
    icon: "ni ni-box-2 text-black",
    component: <Stock/>,
    layout: "/stockMain",
  },
  // {
  //   path: "/asset",
  //   name: "재고분류 코드",
  //   icon: "ni ni-archive-2 text-red",
  //   component: <AssetList/>,
  //   layout: "/stockMain",
  // },
];

export default routes;

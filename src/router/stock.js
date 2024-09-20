import Stock from "../views/pages/stockMain/stock";
import Stats from "../views/pages/stockMain/stats";
import State from "../views/pages/stockMain/state";

const routes = [
  {
    path: "/stats",
    name: "재고파악",
    icon: "ni ni-chart-bar-32 text-blue",
    component: <Stats/>,
    layout: "/stockMain",
  },
  {
    path: "/stock",
    name: "재고",
    icon: "ni ni-box-2 text-black",
    component: <Stock/>,
    layout: "/stockMain",
  },
  {
    path: "/state",
    name: "상태",
    icon: "ni ni-single-02 text-pink",
    component: <State/>,
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

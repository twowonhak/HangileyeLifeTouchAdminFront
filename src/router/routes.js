import Alternative from "views/demo/dashboards/Alternative.js";
import Buttons from "views/pages/components/Buttons.js";
import Calendar from "views/demo/Calendar.js";
import Cards from "views/pages/components/Cards.js";
import Charts from "views/demo/Charts.js";
import Components from "views/demo/forms/Components.js";
import Dashboard from "views/demo/dashboards/Dashboard.js";
import Elements from "views/demo/forms/Elements.js";
import Google from "views/demo/maps/Google.js";
import Grid from "views/pages/components/Grid.js";
import Icons from "views/pages/components/Icons.js";
import Lock from "views/demo/examples/Lock.js";
import Notifications from "views/pages/components/Notifications.js";
import Pricing from "views/demo/examples/Pricing.js";
import Profile from "views/demo/examples/Profile.js";
import ReactBSTables from "views/demo/tables/ReactBSTables.js";
import Register from "views/demo/examples/Register.js";
import RTLSupport from "views/demo/examples/RTLSupport.js";
import Sortable from "views/demo/tables/Sortable.js";
import Tables from "views/demo/tables/Tables.js";
import Timeline from "views/demo/examples/Timeline.js";
import Typography from "views/pages/components/Typography.js";
import Validation from "views/demo/forms/Validation.js";
import Vector from "views/demo/maps/Vector.js";
import Widgets from "views/demo/Widgets.js";
import Login from "../views";
import MainMenu from "../views/pages/mainMenu";

const routes = [
  {
    collapse: true,
    name: "Dashboards",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        miniName: "D",
        component: <Dashboard />,
        layout: "/admin",
      },
      {
        path: "/alternative-dashboard",
        name: "Alternative",
        miniName: "A",
        component: <Alternative />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        miniName: "P",
        component: <Pricing />,
        layout: "/auth",
      },
      {
        path: "/login",
        name: "Login",
        miniName: "L",
        component: <Login />,
        layout: "/auth",
      },
      {
        path: "/mainMenu",
        name: "Calendar",
        icon: "ni ni-calendar-grid-58 text-red",
        component: <MainMenu />,
        layout: "/auth",
      },
      {
        path: "/register",
        name: "Register",
        miniName: "R",
        component: <Register />,
        layout: "/auth",
      },
      {
        path: "/lock",
        name: "Lock",
        miniName: "L",
        component: <Lock />,
        layout: "/auth",
      },
      {
        path: "/timeline",
        name: "Timeline",
        miniName: "T",
        component: <Timeline />,
        layout: "/admin",
      },
      {
        path: "/profile",
        name: "Profile",
        miniName: "P",
        component: <Profile />,
        layout: "/admin",
      },
      {
        path: "/rtl-support",
        name: "RTL Support",
        miniName: "RS",
        component: <RTLSupport />,
        layout: "/rtl",
      },
    ],
  },
  {
    collapse: true,
    name: "Components",
    icon: "ni ni-ui-04 text-info",
    state: "componentsCollapse",
    views: [
      {
        path: "/buttons",
        name: "Buttons",
        miniName: "B",
        component: <Buttons />,
        layout: "/admin",
      },
      {
        path: "/cards",
        name: "Cards",
        miniName: "C",
        component: <Cards />,
        layout: "/admin",
      },
      {
        path: "/grid",
        name: "Grid",
        miniName: "G",
        component: <Grid />,
        layout: "/admin",
      },
      {
        path: "/notifications",
        name: "Notifications",
        miniName: "N",
        component: <Notifications />,
        layout: "/admin",
      },
      {
        path: "/icons",
        name: "Icons",
        miniName: "I",
        component: <Icons />,
        layout: "/admin",
      },
      {
        path: "/typography",
        name: "Typography",
        miniName: "T",
        component: <Typography />,
        layout: "/admin",
      },
      {
        collapse: true,
        name: "Multi Level",
        miniName: "M",
        state: "multiCollapse",
        views: [
          {
            path: "#pablo",
            name: "Third level menu",
            component: () => { },
            layout: "/",
          },
          {
            path: "#pablo",
            name: "Just another link",
            component: () => { },
            layout: "/",
          },
          {
            path: "#pablo",
            name: "One last link",
            component: () => { },
            layout: "/",
          },
        ],
      },
    ],
  },
  {
    collapse: true,
    name: "Forms",
    icon: "ni ni-single-copy-04 text-pink",
    state: "formsCollapse",
    views: [
      {
        path: "/elements",
        name: "Elements",
        miniName: "E",
        component: <Elements />,
        layout: "/admin",
      },
      {
        path: "/components",
        name: "Components",
        miniName: "C",
        component: <Components />,
        layout: "/admin",
      },
      {
        path: "/validation",
        name: "Validation",
        miniName: "V",
        component: <Validation />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Tables",
    icon: "ni ni-align-left-2 text-default",
    state: "tablesCollapse",
    views: [
      {
        path: "/tables",
        name: "Tables",
        miniName: "T",
        component: <Tables />,
        layout: "/admin",
      },
      {
        path: "/sortable",
        name: "Sortable",
        miniName: "S",
        component: <Sortable />,
        layout: "/admin",
      },
      {
        path: "/react-bs-table",
        name: "React BS Tables",
        miniName: "RBT",
        component: <ReactBSTables />,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Maps",
    icon: "ni ni-map-big text-primary",
    state: "mapsCollapse",
    views: [
      {
        path: "/google",
        name: "Google",
        miniName: "G",
        component: <Google />,
        layout: "/admin",
      },
      {
        path: "/vector",
        name: "Vector",
        miniName: "V",
        component: <Vector />,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: "ni ni-archive-2 text-green",
    component: <Widgets />,
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    icon: "ni ni-chart-pie-35 text-info",
    component: <Charts />,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-calendar-grid-58 text-red",
    component: <Calendar />,
    layout: "/admin",
  },

];

export default routes;

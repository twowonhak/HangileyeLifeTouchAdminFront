import React from "react";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";

import routes from "../../router/authority";

function AuthorityLayout() {

  const [sidenavOpen, setSidenavOpen] = React.useState(true);
  const location = useLocation();
  const mainContentRef = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
  }, [location]);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/authorityMain") {
        return (
            <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  // toggles collapse between mini sidenav and normal
  const toggleSidenav = (e) => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }
    setSidenavOpen(!sidenavOpen);
  };
  const getNavbarTheme = () => {
    return location.pathname.indexOf("admin/alternative-dashboard") === -1
        ? "dark"
        : "light";
  };

  return (
      <>
        <div className="main-content" ref={mainContentRef}>
          <AdminNavbar
              theme={getNavbarTheme()}
              toggleSidenav={toggleSidenav}
              sidenavOpen={sidenavOpen}
              brandText={getBrandText(location.pathname)}
          />
          <Routes>
            {getRoutes(routes)}
            <Route
                path="*"
                element={<Navigate to="/authorityMain/authority" replace />}
            />
          </Routes>
        </div>
        {sidenavOpen ? (
            <div className="backdrop d-xl-none" onClick={toggleSidenav} />
        ) : null}

      </>
  );
}

export default AuthorityLayout;

import React from "react";
// react library for routing
import {Route, Routes, useLocation} from "react-router-dom";

// core components
import Login from "../index";
import MainMenu from "../pages/mainMenu";

function AuthLayout() {
  return null;
}

function Auth() {
  const location = useLocation();
  const mainContentRef = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContentRef.current.scrollTop = 0;
    document.body.classList.add("bg-default");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  });
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
      if (prop.layout === "/auth") {
        return (
            <Route path={prop.path} element={prop.component} key={key} exact/>
        );
      } else {
        return null;
      }
    });
  };

  return (
      <>
        <div className="main-content" ref={mainContentRef}>
          {/*<AuthNavbar />*/}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/mainMenu" element={<MainMenu/>}></Route>
          </Routes>
        </div>
        {/*<AuthFooter />*/}
      </>
  );
}

export default Auth;

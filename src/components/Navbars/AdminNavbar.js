import React, {useEffect} from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Nav,
  Navbar,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";
import {useCookies} from "react-cookie";
import {Link, useNavigate} from "react-router-dom";

function AdminNavbar({theme, sidenavOpen, toggleSidenav}) {

  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.ID === undefined) {
      alert("로그인 정보가 없거나 혹은 일정 시간이 경과 되었습니다.")
      navigate('/')
    }
  }, [])

  // function that on mobile devices makes the search open
  const openSearch = () => {
    document.body.classList.add("g-navbar-search-showing");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-showing");
      document.body.classList.add("g-navbar-search-show");
    }, 150);
    setTimeout(function () {
      document.body.classList.add("g-navbar-search-shown");
    }, 300);
  };


  // function that on mobile devices makes the search close
  const closeSearch = () => {
    document.body.classList.remove("g-navbar-search-shown");
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-show");
      document.body.classList.add("g-navbar-search-hiding");
    }, 150);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hiding");
      document.body.classList.add("g-navbar-search-hidden");
    }, 300);
    setTimeout(function () {
      document.body.classList.remove("g-navbar-search-hidden");
    }, 500);
  };

  return (
      <>
        <Navbar
            className={classnames(
                "navbar-top navbar-expand border-bottom",
                {"navbar-dark bg-info": theme === "dark"},
                {"navbar-light bg-secondary": theme === "light"}
            )}
        >
          <Container fluid>
            <Collapse navbar isOpen={true}>
              <Nav className="align-items-center ml-md-auto" navbar>
                <NavItem className="d-xl-none">
                  <div
                      className={classnames(
                          "pr-3 sidenav-toggler",
                          {active: sidenavOpen},
                          {"sidenav-toggler-dark": theme === "dark"}
                      )}
                      onClick={toggleSidenav}
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line"/>
                      <i className="sidenav-toggler-line"/>
                      <i className="sidenav-toggler-line"/>
                    </div>
                  </div>
                </NavItem>
              </Nav>
              <Nav className="align-items-center ml-auto ml-md-0" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle className="nav-link pr-0" color="" tag="a">
                    <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                          alt="..."
                          src={require("assets/img/theme/icons8-male-user-96.jpg")}
                      />
                    </span>
                      <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                       {cookies.NAME} 님 반갑습니다.
                      </span>
                      </Media>
                    </Media>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem className="noti-title" header tag="div">
                      <h6 className="text-overflow m-0">Welcome!</h6>
                    </DropdownItem>
                    <Link to={"/auth/mainMenu"}>
                      <DropdownItem>
                        <i className="ni ni-bullet-list-67"/>
                        <span>메인 메뉴</span>
                      </DropdownItem>
                    </Link>
                    <DropdownItem divider/>
                    <Link to={"/"}>
                      <DropdownItem>
                        <i className="ni ni-user-run"/>
                        <span>로그아웃</span>
                      </DropdownItem>
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
  );
}

AdminNavbar.defaultProps = {
  toggleSidenav: () => {
  },
  sidenavOpen: false,
  theme: "dark",
};
AdminNavbar.propTypes = {
  toggleSidenav: PropTypes.func,
  sidenavOpen: PropTypes.bool,
  theme: PropTypes.oneOf(["dark", "light"]),
};

export default AdminNavbar;

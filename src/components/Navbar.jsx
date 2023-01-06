import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills, achievements, getInTouch } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import LanguageSwitcher from "./LanguageSwitcher";



import { useTranslation } from "react-i18next";

const Navigation = React.forwardRef((props, ref,) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);


  const { t } = useTranslation();

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        
        {props.icons.map((icon, index) => (
            <a
              key={`social-icon-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.url}
              aria-label={`${t(icon.label, icon.labelDefault)}`}
            >
              <i className={`fab ${icon.image}  fa-3x socialicons`} />
            </a>
          ))}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              {`${t('navbar.about', "About")}`}
            </NavLink>
          )}
          {repos.show && (

            <NavLink
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              {`${t('navbar.projects', "Projects")}`}
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              {`${t('navbar.skills', "Skills")}`}
            </NavLink>
          )}
          {achievements.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#achievements"}
            >
              {`${t('navbar.achievements', "Achievements")}`}
            </NavLink>
          )}
          {getInTouch.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#contact-me"}
            >
              {`${t('navbar.contact', "Contact")}`}
            </NavLink>
          )}
        </Nav>
        <Nav className="navbar-nav  ms-auto">
          <LanguageSwitcher />
          {repos.show && (

            <NavLink
              href={process.env.PUBLIC_URL + "/#home"}
            >
              {`<${mainBody.firstName} />`}
            </NavLink>
          )}

          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;

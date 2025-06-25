import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { settings } from "../../portfolio";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";
import { Link } from "react-router-dom";

function Header(props) {
  const theme = props.theme;

  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const link = settings.isSplash ? "/splash" : "/home";

  const [currTheme, setCurrTheme] = useState(props.theme);

  function changeTheme() {
    if (currTheme === "light") {
      props.setTheme("dark");
      setCurrTheme("dark");
    } else {
      props.setTheme("light");
      setCurrTheme("light");
    }
  }

  return (
    <Fade top duration={1000} distance="20px">
      <header className="header">
        <div className="header-content">
          <Link to={link} className="header-title">
            Portfolio
          </Link>
          <button {...styles} onClick={changeTheme}>
            {currTheme === "light" ? <HiMoon /> : <CgSun />}
          </button>
        </div>
      </header>
    </Fade>
  );
}

export default Header;

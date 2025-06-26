import React, { useState } from "react";
import "./Header.css";
import { motion } from "framer-motion";
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
    <motion.header
      className="header"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="header-content">
        <nav>
          <ul className="menu">
            <li>
              <Link to="/home" className="homei">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="cr">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <button {...styles} onClick={changeTheme}>
          {currTheme === "light" ? <HiMoon /> : <CgSun />}
        </button>
      </div>
    </motion.header>
  );
}

export default Header;

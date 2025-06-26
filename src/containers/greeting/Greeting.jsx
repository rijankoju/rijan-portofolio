import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import { greeting } from "../../portfolio";
import { motion } from "framer-motion";
import FeelingProud from "./FeelingProud.jsx";
import { style } from "glamor";
import { useNavigate } from "react-router-dom";

export default function Greeting(props) {
  const theme = props.theme;
  const navigate = useNavigate();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="greet-main"
      id="greeting"
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">{greeting.title}</h1>
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.secondaryText }}
            >
              <span>I'm </span>
              <span style={{ color: theme.accentColor }}>
                {greeting.full_name}.{" "}
              </span>
              {greeting.subTitle}
            </p>
            <SocialMedia />
            <div className="portfolio-repo-btn-div">
              <button
                {...styles}
                className="button"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <FeelingProud theme={theme} />
        </div>
      </div>
    </motion.div>
  );
}

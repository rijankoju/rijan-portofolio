import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <motion.ul
          className="dev-icons"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {props.logos.map((logo) => (
            <OverlayTrigger
              key={logo.skillName}
              placement="top"
              overlay={
                <Tooltip id={`tooltip-top`}>
                  <strong>{logo.skillName}</strong>
                </Tooltip>
              }
            >
              <motion.li
                className="software-skill-inline"
                name={logo.skillName}
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon icon={logo.fontAwesomeClassname} style={logo.style} />
              </motion.li>
            </OverlayTrigger>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;

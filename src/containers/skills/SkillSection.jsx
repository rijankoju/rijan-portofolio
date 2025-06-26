import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { motion } from "framer-motion";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
// import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  // return <DesignImg theme={props.theme} />;
}

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div className="skills-main-div" key={skill.title}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="skills-image-div"
              >
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </motion.div>

              <div className="skills-text-div">
                <motion.h1
                  className="skills-heading"
                  style={{ color: theme.text }}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  {skill.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <SoftwareSkill logos={skill.softwareSkills} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  {skill.skills.map((skillSentence, i) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                        key={i}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="skills-main-div" key={skill.title}>
              <div className="skills-text-div">
                <motion.h1
                  className="skills-heading"
                  style={{ color: theme.text }}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  {skill.title}
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <SoftwareSkill logos={skill.softwareSkills} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  {skill.skills.map((skillSentence, i) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                        key={i}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="skills-image-div"
              >
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </motion.div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SkillSection;

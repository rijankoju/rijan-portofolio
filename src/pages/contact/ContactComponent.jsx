import React from "react";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { motion } from "framer-motion";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio";
import { style } from "glamor";

const ContactData = contactPageData.contactSection;

function Contact(props) {
  const theme = props.theme;

  return (
    <div className="contact-main">
      <div className="basic-contact">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="contact-heading-div"
        >
          <div className="contact-heading-img-div">
            {/* <img
              className="profile-pic"
              src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
              alt=""
            /> */}
          </div>
          <div className="contact-heading-text-div">
            <h1
              className="contact-heading-text"
              style={{ color: theme.text }}
            >
              {ContactData["title"]}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {ContactData["description"]}
            </p>
            <SocialMedia />
            <br />
            <br />
            {/* <a {...styles} className="general-btn" href={greeting.resumeLink}>
              See my Resume
            </a> */}
          </div>
        </motion.div>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;

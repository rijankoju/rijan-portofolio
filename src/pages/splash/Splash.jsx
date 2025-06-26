import React, { useEffect, useState } from "react";
import "./Splash.css";
import { useNavigate } from "react-router-dom";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setRedirect(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate("/home", { replace: true });
    }
  }, [redirect, navigate]);

  return <AnimatedSplash theme={props.theme} />;
}

export default Splash;

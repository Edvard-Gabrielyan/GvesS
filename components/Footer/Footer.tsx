import React from "react";
import s from "./Footer.module.scss";
import Facebook from "./components/icons/Facebook";
import Youtube from "./components/icons/Youtube";
import LinkedIn from "./components/icons/LinkedIn";
import Instagram from "./components/icons/Instagram";
import Twiter from "./components/icons/Twitter";

const Footer = () => {
  return (
    <footer>
      <section className="global-section">
        <div className={`${s.footerContainer} container`}>
          <div className={s.sites}>
            <Facebook />
            <Instagram />
            <Youtube />
            <LinkedIn />
            <Twiter />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

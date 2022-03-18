import React, { FC, memo } from "react";
import Layout from "../../components/Layout/Layout";
import ContactUs from "../../components/Contact/components/ContactUs/ContactUs";
import s from "../../components/Contact/Contact.module.scss";
import ContactInfo from "../../components/Contact/components/ContactInfo/ContactInfo";

const Contact: FC = () => {
  return (
    <Layout title="Contact page">
      <section className="global-section">
        <div className="container">
          <h2 className={s.contactHeader}>Contact Us</h2>
          <p className={s.headerText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
      <section className="global-section">
        <div className={`${s.contactContainer} container`}>
          <ContactInfo />
          <ContactUs />
        </div>
      </section>
    </Layout>
  );
};

export default memo(Contact);

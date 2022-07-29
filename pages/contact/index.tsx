import React, { FC, memo } from "react";
import Layout from "../../components/layout/Layout";
import ContactUs from "../../view/contact/components/contact-us/ContactUs";
import s from "../../view/contact/Contact.module.scss";
import ContactInfo from "../../view/contact/components/contact-info/ContactInfo";
import Container from "../../components/common/container/Container";

const Contact: FC = () => {
  return (
    <Layout title="Contact page">
      <Container>
        <h2 className={s.contactHeader}>Contact Us</h2>
        <p className={s.headerText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </Container>
      <Container>
        <div className={s.contactContainer}>
          <ContactInfo />
          <ContactUs />
        </div>
      </Container>
    </Layout>
  );
};

export default memo(Contact);

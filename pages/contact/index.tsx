import React, { FC, memo } from "react";
import Layout from "../../components/Layout/Layout";
import FormikController from "../../components/common/FormikController/FormikController";
import s from "../../components/About/About.module.scss";
import useContact from "../../services/contact";

const Contact: FC = () => {
  const { formik } = useContact();
  return (
    <Layout title="Contact page">
      <section className="global-section">
        <div className="container">text</div>
      </section>
      <section className="global-section">
        <div className="container">
          <form className={s.aboutForm} onSubmit={formik.handleSubmit}>
            <FormikController
              control="input"
              head="Full name"
              name="fullName"
              placeholder="Full name"
              type="text"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.fullName}
            />
            <FormikController
              control="input"
              head="Phone"
              name="phone"
              placeholder="Phone"
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.phone}
            />
            <FormikController
              control="input"
              head="Email"
              name="email"
              placeholder="Email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
            />
            <FormikController
              control="input"
              head="Message"
              name="messages"
              placeholder="Message"
              type="text"
              value={formik.values.messages}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.messages}
            />
            <button type="submit" className={s.submit}>
              Contact
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default memo(Contact);

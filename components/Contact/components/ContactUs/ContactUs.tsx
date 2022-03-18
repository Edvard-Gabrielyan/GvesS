import React, { memo } from "react";
import s from "../../Contact.module.scss";
import FormikController from "../../../common/FormikController/FormikController";
import useContact from "../../../../services/contact";

const ContactUs = () => {
  const { formik } = useContact();
  return (
    <form className={s.aboutForm} onSubmit={formik.handleSubmit}>
      <FormikController
        control="input"
        head="Full name"
        name="fullName"
        type="text"
        value={formik.values.fullName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.fullName}
        touched={formik.touched.fullName}
      />
      <FormikController
        control="input"
        head="Phone"
        name="phone"
        type="text"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.phone}
        touched={formik.touched.phone}
      />
      <FormikController
        control="input"
        head="Email"
        name="email"
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <FormikController
        control="input"
        head="Message"
        name="messages"
        type="text"
        value={formik.values.messages}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.messages}
        touched={formik.touched.messages}
      />
      <div className={s.submitContainer}>
        <button type="submit" className={s.submit}>
          Contact Us
        </button>
      </div>
    </form>
  );
};

export default memo(ContactUs);

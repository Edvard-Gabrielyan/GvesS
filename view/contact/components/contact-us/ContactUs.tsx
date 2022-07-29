import React, { FC, memo } from "react";
import s from "../../Contact.module.scss";
import FormikController from "../../../../components/common/formik-controller/FormikController";
import useContact from "../../../../services/contact";

const ContactUs: FC = () => {
  const { data, onSubmit } = useContact();
  return (
    <form className={s.aboutForm} onSubmit={onSubmit}>
      {data.map((datum) => (
        <FormikController
          control={datum.control}
          head={datum.head}
          name={datum.name}
          type={datum.type}
          key={datum.id}
          value={datum.fullName}
          onChange={datum.handleChange}
          onBlur={datum.handleBlur}
          error={datum.error}
          touched={datum.touched}
        />
      ))}
      <div className={s.submitContainer}>
        <button type="submit" className={s.submit}>
          Contact Us
        </button>
      </div>
    </form>
  );
};

export default memo(ContactUs);

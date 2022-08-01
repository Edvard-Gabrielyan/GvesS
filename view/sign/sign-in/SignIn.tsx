import React from "react";
import s from "../Sign.module.scss";
import FormikController from "../../../components/common/formik-controller/FormikController";
import useSignIn from "../../../services/sign/sign-in";

const SignIn = () => {
  const { data, onSubmit } = useSignIn();

  return (
    <div className={s.sign_body}>
      <form className={s.sign_form} onSubmit={onSubmit}>
        {data.map((datum) => (
          <FormikController
            control={datum.control}
            head={datum.head}
            name={datum.name}
            type={datum.type}
            style={datum.style}
            key={datum.id}
            value={datum.fullName}
            onChange={datum.handleChange}
            onBlur={datum.handleBlur}
            error={datum.error}
            touched={datum.touched}
          />
        ))}
        <div className={s.submit_container}>
          <button type="submit" className={s.submit}>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

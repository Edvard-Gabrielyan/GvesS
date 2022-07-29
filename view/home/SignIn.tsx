import React from "react";
import Image from "next/image";
import Container from "../../components/common/container/Container";
import useSignIn from "../../services/sign-in";
import FormikController from "../../components/common/formik-controller/FormikController";
import s from "./SignIn.module.scss";

const SignIn = () => {
  const { data, onSubmit } = useSignIn();
  return (
    <Container>
      <div className={s.sign_in_container}>
        {/* <div className={s.meeting} onClick={() => console.log(10)}> */}
        {/*  Add Many */}
        {/* </div> */}
        {/* <div className={s.person} onClick={() => console.log(20)}> */}
        {/*  Get Many */}
        {/* </div> */}
        <div className={s.logo}>
          <Image
            src="./images/welcome_img.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={s.sign_in_body}>
          <form className={s.aboutForm} onSubmit={onSubmit}>
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
            <div className={s.submitContainer}>
              <button type="submit" className={s.submit}>
                LogIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;

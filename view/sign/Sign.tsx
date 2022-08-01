import React from "react";
import Image from "next/image";
import Container from "../../components/common/container/Container";
import s from "./Sign.module.scss";
import useSign from "../../services/sign/sign";

const Sign = () => {
  const { componentInfo, setType, type } = useSign();
  const { Component, props } = componentInfo;

  return (
    <Container>
      <div className={s.sign_container}>
        <div className={s.logo}>
          <Image
            src="../images/welcome_img.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={s.rout}>
          <span
            style={{
              color: type === "sign_in" ? "#00f" : "#000",
            }}
            onClick={() => setType("sign_in")}
          >
            Sign In
          </span>
          <span
            style={{
              color: type === "sign_up" ? "#00f" : "#000",
            }}
            onClick={() => setType("sign_up")}
          >
            Sig Up
          </span>
          <span
            style={{
              color: type === "forget" ? "#00f" : "#000",
            }}
            onClick={() => setType("forget")}
          >
            Forget ?
          </span>
        </div>
        <Component {...props} />
      </div>
    </Container>
  );
};

export default Sign;

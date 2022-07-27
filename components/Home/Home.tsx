import React from "react";
import Container from "../common/container/Container";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <Container>
      <div className={s.home_container}>
        <div className={s.meeting} onClick={() => console.log(10)}>
          Add Many
        </div>
        <div className={s.person} onClick={() => console.log(20)}>
          Get Many
        </div>
      </div>
    </Container>
  );
};

export default Home;

import React from "react";
import Container from "../common/container/Container";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <Container>
      <div className={s.home_container}>
        <div className={s.meeting}>d</div>
        <div className={s.person}>m</div>
      </div>
    </Container>
  );
};

export default Home;

import React from "react";
import s from "./Home.module.scss";
import Container from "../../components/common/container/Container";

const Home = () => {
  return (
    <Container>
      <div className={s.home_container}>Home</div>
    </Container>
  );
};

export default Home;

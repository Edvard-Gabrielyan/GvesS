import React, { FC, memo } from "react";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/common/container/Container";

const About: FC = () => {
  return (
    <Layout title="About">
      <Container>Abouts</Container>
      <Container>About</Container>
      <Container>About</Container>
      <Container>About</Container>
      <Container>About</Container>
    </Layout>
  );
};

export default memo(About);

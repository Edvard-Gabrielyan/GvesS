import React, { FC, memo } from "react";
import Layout from "../../components/layout/Layout";
import Container from "../../components/common/container/Container";

const About: FC = () => {
  return (
    <Layout title="About">
      <Container>Abouts</Container>
      <Container>Abingul</Container>
    </Layout>
  );
};

export default memo(About);

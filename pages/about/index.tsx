import React, { FC, memo } from "react";
import Layout from "../../components/Layout/Layout";

const About: FC = () => {
  return (
    <Layout title="About">
      <section className="global-section">
        <div className="container">About</div>
      </section>
      <section className="global-section">
        <div className="container">About</div>
      </section>
      <section className="global-section">
        <div className="container">About</div>
      </section>
      <section className="global-section">
        <div className="container">About</div>
      </section>
    </Layout>
  );
};

export default memo(About);

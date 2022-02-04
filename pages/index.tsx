import React, { FC } from "react";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import useHome from "../services/home";

const Index: FC = () => {
  const { data } = useHome();
  console.log(data);
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Index;

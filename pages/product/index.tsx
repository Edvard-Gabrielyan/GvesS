import React, { FC } from "react";
import Layout from "../../components/Layout/Layout";
import Product from "../../components/Product/Product";

const Index: FC = () => {
  return (
    <Layout title="Product page">
      <Product />
    </Layout>
  );
};

export default Index;

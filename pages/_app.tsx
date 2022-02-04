import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "antd/dist/antd.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;

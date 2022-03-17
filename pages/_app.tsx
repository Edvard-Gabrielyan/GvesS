import React from "react";
import type { AppProps } from "next/app";
import "../assets/fonts.css";
import "../assets/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;

import React from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import s from "./Layout.module.scss";

export default function Layout({ children, title = "GvesS" }: any) {
  return (
    <div className={s.rootContainer}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Edvard Gabrielyan" />
        <meta name="contact" content="gabrielyanedvard@gmail.com" />
        <meta name="copyright" content="Edvard Gabrielyan" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="expires" content="0" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="og:title" property="og:title" content="GvesS consulting" />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <div className="bgForIphoneScroll" />
    </div>
  );
}

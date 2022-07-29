import React from "react";
import Head from "next/head";
import Header from "../../view/header/Header";
import Footer from "../../view/footer/Footer";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100&display=swap"
          rel="stylesheet"
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

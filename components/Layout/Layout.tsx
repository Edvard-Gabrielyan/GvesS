import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Dropdown, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Header from "../Header/Header";
import s from "./Layout.module.scss";

export default function Layout({ children, title = "GvesS" }: any) {
  const menu = (
    <Menu>
      <Header />
    </Menu>
  );

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </Head>
      <nav>
        <div className={s.logo}>
          <Link href={"/"}>
            <a>
              <Image src="/logo.png" alt="Logo" height={32} width={32} />
            </a>
          </Link>
        </div>
        <header>
          <Header />
        </header>
        <div className={s.icon}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a className={s.dropdown} onClick={(e) => e.preventDefault()}>
              <MenuOutlined />
            </a>
          </Dropdown>
        </div>
      </nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

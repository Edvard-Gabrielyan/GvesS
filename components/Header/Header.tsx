import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "./Header.module.scss";

const Header: FC = () => {
  const router = useRouter();

  return (
    <div className={s.headerContainer}>
      <Link href={"/"}>
        <a
          className={`${s.title} ${router.pathname === "/" ? s.active : null}`}
        >
          Home
        </a>
      </Link>
      <Link href={"/about"}>
        <a
          className={`${s.title} ${
            router.pathname === "/about" ? s.active : null
          }`}
        >
          About
        </a>
      </Link>
      <Link href={"/application"}>
        <a
          className={`${s.title} ${
            router.pathname === "/application" ? s.active : null
          }`}
        >
          Application
        </a>
      </Link>
      <Link href={"/learning"}>
        <a
          className={`${s.title} ${
            router.pathname === "/learning" ? s.active : null
          }`}
        >
          Learning
        </a>
      </Link>
      <Link href={"/product"}>
        <a
          className={`${s.title} ${
            router.pathname === "/product" ? s.active : null
          }`}
        >
          Product
        </a>
      </Link>
      <Link href={"/contact"}>
        <a
          className={`${s.title} ${
            router.pathname === "/contact" ? s.active : null
          }`}
        >
          Contact Us
        </a>
      </Link>
    </div>
  );
};

export default Header;

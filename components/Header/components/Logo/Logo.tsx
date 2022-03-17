import React, { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <Link href={"/"}>
      <a className={s.logo}>
        <Image src="/logo.png" alt="Logo" height={32} width={32} />
      </a>
    </Link>
  );
};

export default memo(Logo);

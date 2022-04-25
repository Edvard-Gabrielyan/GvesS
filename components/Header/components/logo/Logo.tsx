import React, { FC, memo } from "react";
import Link from "next/link";
import s from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <Link href={"/"}>
      <a className={s.logo}>GvesS</a>
    </Link>
  );
};

export default memo(Logo);

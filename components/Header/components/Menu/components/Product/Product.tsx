import React, { FC, memo } from "react";
import Link from "next/link";
import s from "../MenuItems.module.scss";

interface IProps {
  mobileMenu?: string;
}
const Product: FC<IProps> = ({ mobileMenu }) => {
  return (
    <div className={`${mobileMenu ? s.dropdownMobileMenu : s.container}`}>
      <Link href={"https://docs.kadena.io/"}>
        <a className={s.row} target="_blank">
          Product
        </a>
      </Link>
      <Link href={"https://pactlang.org/"}>
        <a className={s.row} target="_blank">
          Product Tutorials
        </a>
      </Link>
      <Link href={"https://docs.kadena.io/whitepapers/overview"}>
        <a className={s.row} target="_blank">
          Product For You
        </a>
      </Link>
    </div>
  );
};

export default memo(Product);

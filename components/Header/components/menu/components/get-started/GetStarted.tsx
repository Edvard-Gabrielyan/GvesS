import React, { FC, memo } from "react";
import Link from "next/link";
import s from "../MenuItems.module.scss";

interface IProps {
  mobileMenu?: string;
}
const GetStarted: FC<IProps> = ({ mobileMenu }) => {
  return (
    <div className={`${mobileMenu ? s.dropdownMobileMenu : s.container}`}>
      <Link href={"https://docs.kadena.io/"}>
        <a className={s.row}>Start Whit Us</a>
      </Link>
      <Link href={"https://pactlang.org/"}>
        <a className={s.row}>Learn Whit Us</a>
      </Link>
      <Link href={"https://docs.kadena.io/whitepapers/overview"}>
        <a className={s.row}>Kadena Whitepapers</a>
      </Link>
    </div>
  );
};

export default memo(GetStarted);

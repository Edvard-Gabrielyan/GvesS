import React, { FC, memo } from "react";
import Link from "next/link";
import s from "./Menu.module.scss";
import { useMenu } from "../../../../services/menu";
import ArrowIcon from "../../../common/GlobalIcons/ArrowIcon";
import GlobalDropdown from "../../../common/GlobalDropdown/GlobalDropdown";

const Menu: FC = () => {
  const { openedTab, setOpenedTab, componentInfo } = useMenu();
  const { Component, props: componentProps } = componentInfo;
  return (
    <div className={s.menuContainer}>
      <div className={s.menu}>
        <Link href={"/about"}>
          <a href={"/about"} className={s.block}>
            ABOUT
          </a>
        </Link>
        <a
          className={`${s.block} ${openedTab === "product" ? s.active : ""}`}
          onClick={(e) => {
            setOpenedTab((prev) => (prev === "product" ? "" : "product"));
            e.stopPropagation();
          }}
        >
          Product
          {openedTab === "product" ? (
            <ArrowIcon height="8" width="8" fill="#17092E" />
          ) : (
            <ArrowIcon height="8" width="8" fill="#FFF" />
          )}
        </a>
        <a
          className={`${s.block} ${openedTab === "getStarted" ? s.active : ""}`}
          onClick={(e) => {
            setOpenedTab((prev) => (prev === "getStarted" ? "" : "getStarted"));
            e.stopPropagation();
          }}
        >
          GET STARTED
          {openedTab === "getStarted" ? (
            <ArrowIcon height="8" width="8" fill="#17092E" />
          ) : (
            <ArrowIcon height="8" width="8" fill="#FFF" />
          )}
        </a>
        <a
          className={`${s.block} ${openedTab === "learnMore" ? s.active : ""}`}
          onClick={(e) => {
            setOpenedTab((prev) => (prev === "learnMore" ? "" : "learnMore"));
            e.stopPropagation();
          }}
        >
          LEARN MORE
          {openedTab === "learnMore" ? (
            <ArrowIcon height="8" width="8" fill="#17092E" />
          ) : (
            <ArrowIcon height="8" width="8" fill="#FFF" />
          )}
        </a>
        <Link href={"/contact"}>
          <a href={"/contact"} className={s.block}>
            Contact
          </a>
        </Link>
        {openedTab && (
          <GlobalDropdown setOpenedTab={setOpenedTab}>
            <Component {...componentProps} />
          </GlobalDropdown>
        )}
      </div>
    </div>
  );
};

export default memo(Menu);

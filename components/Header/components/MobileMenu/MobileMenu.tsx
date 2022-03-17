import React, { memo, useCallback, useState } from "react";
import Link from "next/link";
import MenuIcon from "./components/MenuIcon";
import GlobalDropdown from "../../../common/GlobalDropdown/GlobalDropdown";
import s from "./MobileMenu.module.scss";
import GetStarted from "../Menu/components/GetStarted/GetStarted";
import Product from "../Menu/components/Product/Product";
import LearnMore from "../Menu/components/LearnMore/LearnMore";

const MobileMenu = () => {
  const [visibleMobileItem, setVisibleMobileItem] = useState<boolean | string>(
    ""
  );
  const [visibleMobileMenu, setVisibleMobileMenu] = useState<string | boolean>(
    false
  );
  const onMenuItem = useCallback((item) => {
    setVisibleMobileItem((prev) => (prev === item ? "" : item));
  }, []);

  return (
    <div className={s.mobileMenu}>
      <MenuIcon
        onClick={(e) => {
          setVisibleMobileMenu(!visibleMobileMenu);
          e.stopPropagation();
        }}
      />
      {visibleMobileMenu ? (
        <GlobalDropdown setOpenedTab={setVisibleMobileMenu}>
          <div className={s.dropdownMenu}>
            <Link href={"/about"}>
              <a href={"/about"} className={s.item}>
                About
              </a>
            </Link>
            <a
              className={s.item}
              onClick={(e) => {
                onMenuItem("product");
                e.stopPropagation();
              }}
            >
              Product
              {visibleMobileItem === "product" ? (
                <GlobalDropdown setOpenedTab={setVisibleMobileItem}>
                  <Product mobileMenu="mobileMenu" />
                </GlobalDropdown>
              ) : null}
            </a>
            <a
              className={s.item}
              onClick={(e) => {
                onMenuItem("started");
                e.stopPropagation();
              }}
            >
              Get Started
              {visibleMobileItem === "started" ? (
                <GlobalDropdown setOpenedTab={setVisibleMobileItem}>
                  <GetStarted mobileMenu="mobileMenu" />
                </GlobalDropdown>
              ) : null}
            </a>
            <a
              className={s.item}
              onClick={(e) => {
                onMenuItem("learn");
                e.stopPropagation();
              }}
            >
              Learn More
              {visibleMobileItem === "learn" ? (
                <GlobalDropdown setOpenedTab={setVisibleMobileItem}>
                  <LearnMore mobileMenu="mobileMenu" />
                </GlobalDropdown>
              ) : null}
            </a>
            <Link href={"/contact"}>
              <a href={"/contact"} className={s.item}>
                Contact
              </a>
            </Link>
          </div>
        </GlobalDropdown>
      ) : null}
    </div>
  );
};

export default memo(MobileMenu);

import React, { memo, useCallback, useState } from "react";
import Link from "next/link";
import s from "./MobileMenu.module.scss";
import GetStarted from "../menu/components/get-started/GetStarted";
import LearnMore from "../menu/components/learn-more/LearnMore";
import Product from "../menu/components/product/Product";
import GlobalDropdown from "../../../../components/common/global-dropdown/GlobalDropdown";

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
    <div className={s.menuToggle}>
      <input type="checkbox" />
      <span />
      <span />
      <span />
      <div className={s.menu}>
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
    </div>
    // <div className={s.mobileMenu}>
    //   <MenuIcon
    //     onClick={(e) => {
    //       setVisibleMobileMenu(!visibleMobileMenu);
    //       e.stopPropagation();
    //     }}
    //   />
    //   {visibleMobileMenu ? (
    //     <global-dropdown setOpenedTab={setVisibleMobileMenu}>
    //       <div className={s.dropdownMenu}>
    //         <Link href={"/about"}>
    //           <a href={"/about"} className={s.item}>
    //             About
    //           </a>
    //         </Link>
    //         <a
    //           className={s.item}
    //           onClick={(e) => {
    //             onMenuItem("product");
    //             e.stopPropagation();
    //           }}
    //         >
    //           product
    //           {visibleMobileItem === "product" ? (
    //             <global-dropdown setOpenedTab={setVisibleMobileItem}>
    //               <product mobileMenu="mobileMenu" />
    //             </global-dropdown>
    //           ) : null}
    //         </a>
    //         <a
    //           className={s.item}
    //           onClick={(e) => {
    //             onMenuItem("started");
    //             e.stopPropagation();
    //           }}
    //         >
    //           Get Started
    //           {visibleMobileItem === "started" ? (
    //             <global-dropdown setOpenedTab={setVisibleMobileItem}>
    //               <get-started mobileMenu="mobileMenu" />
    //             </global-dropdown>
    //           ) : null}
    //         </a>
    //         <a
    //           className={s.item}
    //           onClick={(e) => {
    //             onMenuItem("learn");
    //             e.stopPropagation();
    //           }}
    //         >
    //           Learn More
    //           {visibleMobileItem === "learn" ? (
    //             <global-dropdown setOpenedTab={setVisibleMobileItem}>
    //               <learn-more mobileMenu="mobileMenu" />
    //             </global-dropdown>
    //           ) : null}
    //         </a>
    //         <Link href={"/contact"}>
    //           <a href={"/contact"} className={s.item}>
    //             contact
    //           </a>
    //         </Link>
    //       </div>
    //     </global-dropdown>
    //   ) : null}
    // </div>
  );
};

export default memo(MobileMenu);

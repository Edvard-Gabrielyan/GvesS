import React, { FC, useEffect, memo } from "react";
import s from "./GlobalDropdown.module.css";
import { IGlobalDropdownProps } from "../types/type";

const GlobalDropdown: FC<IGlobalDropdownProps> = ({
  children,
  setOpenedTab,
}) => {
  useEffect(() => {
    window.addEventListener("click", () => {
      setOpenedTab("");
      document.body.style.overflow = "initial";
    });
    return () => {
      window.removeEventListener("click", () => {
        setOpenedTab("");
        document.body.style.overflow = "initial";
      });
    };
  }, [setOpenedTab]);
  return <div className={s.dropdown}>{children}</div>;
};

export default memo(GlobalDropdown);

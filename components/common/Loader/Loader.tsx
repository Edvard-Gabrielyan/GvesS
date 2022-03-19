import React from "react";
import dynamic from "next/dynamic";
import cn from "classnames";
import s from "./Loader.module.css";

const PuffLoader = dynamic<any>(
  // @ts-ignore
  () => import("react-spinners/PuffLoader"),
  {
    ssr: false,
  }
);

interface Props {
  size?: number;
}

export const Loader = (props: Props) => {
  const loadingClass = cn(s.loading, {});
  return (
    <div className={loadingClass}>
      <PuffLoader color="#FFFFFF" size={props.size || 40} />
    </div>
  );
};

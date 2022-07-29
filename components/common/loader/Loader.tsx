import React from "react";
import cn from "classnames";
import s from "./Loader.module.css";

// const PuffLoader = dynamic<any>(
//   // @ts-ignore
//   () => import("react-spinners/PuffLoader"),
//   {
//     ssr: false,
//   }
// );

// interface Props {
//   size?: number;
// }

export const Loader = () => {
  const loadingClass = cn(s.loading, {});
  return (
    <div className={loadingClass}>
      Loading...
      {/* <PuffLoader color="#FFFFFF" size={props.size || 40} /> */}
    </div>
  );
};

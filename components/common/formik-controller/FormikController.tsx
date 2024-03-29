import React, { FC, memo } from "react";
import s from "./FormikController.module.scss";
import useFormikController from "./useFormikController";
import { IPropsFormikController } from "../types/type";

const FormikController: FC<IPropsFormikController> = (props) => {
  const { type, componentInfo } = useFormikController(props);
  const { Component, props: componentProps } = componentInfo;

  return (
    <div className={s.controller}>
      {type && <Component {...componentProps} />}
    </div>
  );
};
export default memo(FormikController);

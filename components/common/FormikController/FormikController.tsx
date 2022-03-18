import React, { FC, memo } from "react";
import s from "./FormikController.module.scss";
import useFormikController, {
  IPropsFormikController,
} from "../../../services/handle-hooks/formikController";

const FormikController: FC<IPropsFormikController> = (props) => {
  // const { head } = props;
  const { type, componentInfo } = useFormikController(props);
  const { Component, props: componentProps } = componentInfo;

  return (
    <div className={s.controller}>
      {/* {head ? <div className={s.head}>{head}</div> : null} */}
      {type && <Component {...componentProps} />}
    </div>
  );
};
export default memo(FormikController);

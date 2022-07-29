import React, { FC, memo } from "react";
import s from "../FormikController.module.scss";
import { IPropsFormikController } from "../types";

const TextArea: FC<IPropsFormikController> = ({
  head,
  children,
  error,
  touched,
  style,
  ...rest
}) => {
  return (
    <>
      <div className={`${s.block} ${s.textAreaBlock}`}>
        <textarea {...rest} className={s.element} required autoComplete="off" />
        <span className={s.span}>{head}</span>
      </div>
      {touched && error && <div className={s.textDanger}>{error}</div>}
    </>
  );
};

export default memo(TextArea);

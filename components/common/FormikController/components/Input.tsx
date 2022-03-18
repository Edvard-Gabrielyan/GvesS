import React, { FC, memo } from "react";
import s from "../FormikController.module.scss";
import { IPropsFormikController } from "../../../../services/handle-hooks/formikController";

const Input: FC<IPropsFormikController> = ({
  head,
  children,
  error,
  ...rest
}) => {
  return (
    <>
      <div className={`${s.block} ${s.inputBlock}`}>
        {children ? <span className={s.icon}>{children}</span> : null}
        <input {...rest} className={s.element} required />
        <span className={s.span}>{head}</span>
      </div>
      {error && <div className={s.textDanger}>{error}</div>}
    </>
  );
};

export default memo(Input);

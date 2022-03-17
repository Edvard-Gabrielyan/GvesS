import React, { FC, memo } from "react";
import s from "./Radio.module.css";
import { IPropsFormikController } from "../../FormikController";

interface IProps {
  props: IPropsFormikController;
}

const Radio: FC<IProps> = ({ props }) => {
  const { id, control, label, ...rest } = props;
  return (
    <div className={s.radio}>
      <input id={id} type={control} {...rest} className={s.pairRadio} />
      <label htmlFor={id} className={s.radioLabel}>
        {label}
      </label>
    </div>
  );
};

export default memo(Radio);

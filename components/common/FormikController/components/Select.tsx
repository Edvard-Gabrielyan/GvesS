import React, { FC, memo } from "react";
import s from "../FormikController.module.scss";
import ArrowIcon from "../../GlobalIcons/ArrowIcon";
import { IPropsFormikController } from "../useFormikController";

const Select: FC<IPropsFormikController> = ({ head, data, error, ...rest }) => {
  return (
    <>
      <div className={`${s.block} ${s.selectBlock}`}>
        <select {...rest} className={s.element} required>
          {data?.map((datum) => (
            <option key={datum.id} value={datum.value}>
              {datum.value}
            </option>
          ))}
        </select>
        <span className={s.span}>{head}</span>
        <ArrowIcon height="8px" width="8px" fill="#fff" />
      </div>
      {error && <div className={s.textDanger}>{error}</div>}
    </>
  );
};

export default memo(Select);

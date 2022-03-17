import React, { FC, memo } from "react";
import s from "../FormikController.module.scss";
import ArrowIcon from "../../GlobalIcons/ArrowIcon";
import { IPropsFormikController } from "../../../../services/handle-hooks/formikController";

const Select: FC<IPropsFormikController> = ({ data, error, ...rest }) => {
  return (
    <>
      <div className={`${s.block} ${s.selectBlock}`}>
        <select {...rest} className={s.element}>
          {data?.map((datum) => (
            <option key={datum.id} value={datum.value}>
              {datum.value}
            </option>
          ))}
        </select>
        <ArrowIcon height="8px" width="8px" fill="#fff" />
      </div>
      {error && <div className={s.textDanger}>{error}</div>}
    </>
  );
};

export default memo(Select);

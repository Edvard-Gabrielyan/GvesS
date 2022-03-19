import React, { FC, memo } from "react";
import s from "./DynamicRow.module.scss";
import MinusIcon from "../GlobalIcons/MinusIcon";
import PlusIcon from "../GlobalIcons/PlusIcon";
import useDynamicRow from "./useDynamicRow";

const DynamicRow: FC = () => {
  const { onChange, value, onAddRow, onDeleteRow, data } = useDynamicRow();
  return (
    <div className={s.rowContainer}>
      {data.map((env, index) => (
        <div className={s.block} key={index}>
          <span className={s.text}>{env}</span>
          <button
            type="button"
            className={s.plus}
            onClick={() => onDeleteRow(index)}
          >
            <MinusIcon height="14" width="14" fill="#000" />
          </button>
        </div>
      ))}
      <div className={s.block}>
        <input
          type="text"
          name="key"
          className={s.element}
          placeholder="Add row"
          value={value}
          onChange={onChange}
        />
        <button type="button" className={s.plus} onClick={onAddRow}>
          <PlusIcon height="14" width="14" fill="#000" />
        </button>
      </div>
    </div>
  );
};

export default memo(DynamicRow);

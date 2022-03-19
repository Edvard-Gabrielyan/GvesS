import { ChangeEvent, useCallback, useState } from "react";

const useDynamicRow = () => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<Array<string>>([]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onAddRow = useCallback(() => {
    if (value) {
      const newData = [...data, value];
      setData(newData);
    }
    setValue("");
  }, [value, data]);

  const onDeleteRow = useCallback(
    (deleteIndex: number) => {
      const newData = data.filter((_item, index) => index !== deleteIndex);
      setData(newData);
    },
    [data]
  );

  return { onChange, value, onAddRow, onDeleteRow, data };
};

export default useDynamicRow;

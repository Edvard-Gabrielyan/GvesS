import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useDebounce } from "./handle-hooks/debounce";

export type ISearchData = {
  id: number;
  keys: string;
  values: string;
  loading?: boolean;
};

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  const debounceSearchValue = useDebounce(searchValue, 1000);

  const searchRequestValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setSearchValue(value);
  }, []);

  useEffect(() => {
    console.log(searchValue);
  }, [debounceSearchValue]);

  const dataSearch = useMemo(
    () => [
      {
        id: 1,
        keys: "Request Keys",
        values: "fghjkl;",
        loading: false,
      },
      {
        id: 4,
        keys: "Account History",
        values: "dfghjk",
        loading: false,
      },
    ],
    []
  );

  return {
    searchRequestValue,
    searchValue,
    dataSearch,
    setSearchValue,
    focused,
    setFocused,
  };
};

import React, { ChangeEvent, FC, memo } from "react";
import s from "./Search.module.scss";
import SearchIcon from "../../../common/global-icons/SearchIcon";
import CloseIcon from "../../../common/global-icons/CloseIcon";

export interface IPropsHeader {
  searchRequestValue: (e: ChangeEvent<HTMLInputElement>) => void;
  setSearchValue: (val: string) => void;
  searchValue: string;
  focused: boolean;
  setFocused: (bool: boolean) => void;
}

const Search: FC<IPropsHeader> = ({
  searchRequestValue,
  searchValue,
  setSearchValue,
  focused,
  setFocused,
}) => {
  return (
    <div className={`${s.searchInput} ${focused && s.activeSearchInput}`}>
      <input
        className={s.searchInputClass}
        placeholder="Search"
        value={searchValue}
        onChange={searchRequestValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {searchValue ? (
        <CloseIcon
          height="14"
          width="14"
          fill="#B58BBA"
          onClick={() => {
            setSearchValue("");
          }}
        />
      ) : (
        <SearchIcon height="18" width="18" fill="#B58BBA" />
      )}
    </div>
  );
};

export default memo(Search);

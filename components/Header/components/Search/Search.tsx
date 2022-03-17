import React, { ChangeEvent, FC, memo } from "react";
import s from "./Search.module.scss";
import SearchIcon from "../../../common/GlobalIcons/SearchIcon";
import CloseIcon from "../../../common/GlobalIcons/CloseIcon";

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
        <div
          className={s.close}
          onClick={() => {
            setSearchValue("");
          }}
        >
          <CloseIcon height="14" width="14" fill="#B58BBA" />
        </div>
      ) : (
        <SearchIcon height="18" width="18" fill="#B58BBA" />
      )}
    </div>
  );
};

export default memo(Search);

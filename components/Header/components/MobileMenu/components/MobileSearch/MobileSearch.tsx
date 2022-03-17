import React, { FC, memo } from "react";
import s from "../../../Search/Search.module.scss";
import { IPropsHeader } from "../../../Search/Search";
import SearchIcon from "../../../../../common/GlobalIcons/SearchIcon";

const MobileSearch: FC<IPropsHeader> = ({
  searchValue,
  searchRequestValue,
  focused,
  setFocused,
}) => {
  return (
    <div
      className={`${s.searchInput} ${focused && s.activeSearchInput}`}
      style={{
        margin: "0",
        width: "100%",
        height: "40px",
        marginRight: "16px",
      }}
    >
      {searchValue ? (
        <SearchIcon height="18" width="18" fill="#3F1B52" />
      ) : null}
      <input
        className={s.searchInputClass}
        autoFocus
        placeholder="Search..."
        value={searchValue}
        onChange={searchRequestValue}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default memo(MobileSearch);

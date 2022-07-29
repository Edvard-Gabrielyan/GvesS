import React, { FC, memo } from "react";
import s from "../../../search/Search.module.scss";
import { IPropsHeader } from "../../../search/Search";
import SearchIcon from "../../../../../../components/common/global-icons/SearchIcon";

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

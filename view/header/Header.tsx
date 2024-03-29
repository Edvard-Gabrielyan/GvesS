import React, { FC, memo, useState } from "react";
import s from "./Header.module.scss";
import Logo from "./components/logo/Logo";
import Search from "./components/search/Search";
import { useSearch } from "../../services/search";
import Menu from "./components/menu/Menu";
import useTopScroll from "../../services/handle-hooks/topScroll";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import SearchIcon from "../../components/common/global-icons/SearchIcon";
import CloseIcon from "../../components/common/global-icons/CloseIcon";
import MobileSearch from "./components/mobile-menu/components/mobile-search/MobileSearch";

const Header: FC = () => {
  const topScroll = useTopScroll();
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const {
    searchRequestValue,
    setSearchValue,
    searchValue,
    focused,
    setFocused,
  } = useSearch();
  return (
    <header
      className={s.header}
      style={{
        background: `rgba(23, 13, 40, ${topScroll && topScroll / 70})`,
      }}
    >
      <div className={`${s.desktopHeader} ${s.headerContainer}`}>
        <Logo />
        <Search
          searchRequestValue={searchRequestValue}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          focused={focused}
          setFocused={setFocused}
        />
        <Menu />
      </div>
      <div className={`${s.mobileHeader} ${s.headerContainer}`}>
        {activeSearch ? (
          <>
            <MobileSearch
              searchRequestValue={searchRequestValue}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              focused={focused}
              setFocused={setFocused}
            />
            <CloseIcon
              height="16"
              width="16"
              fill="#B58BBA"
              onClick={() => {
                setActiveSearch(false);
                setSearchValue("");
              }}
            />
          </>
        ) : (
          <>
            <MobileMenu />
            <Logo />
            <SearchIcon
              height="20"
              width="20"
              fill="#FFF"
              onClick={() => setActiveSearch(true)}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default memo(Header);

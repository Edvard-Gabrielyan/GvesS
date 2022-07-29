import { FC, useMemo, useState } from "react";
import GetStarted from "../view/header/components/menu/components/get-started/GetStarted";
import LearnMore from "../view/header/components/menu/components/learn-more/LearnMore";
import Product from "../view/header/components/menu/components/product/Product";
import About from "../pages/about";
import Contact from "../pages/contact";

type ComponentInfo = {
  Component: FC<any>;
  props: Record<string, any>;
};

export const useMenu = () => {
  const [openedTab, setOpenedTab] = useState<string>("");

  const menuInfo: Record<string, ComponentInfo> = useMemo(
    () => ({
      about: {
        Component: About,
        props: {},
      },
      product: {
        Component: Product,
        props: {},
      },
      getStarted: {
        Component: GetStarted,
        props: {},
      },
      learnMore: {
        Component: LearnMore,
        props: {},
      },
      contact: {
        Component: Contact,
        props: {},
      },
    }),
    [openedTab]
  );
  return {
    openedTab,
    setOpenedTab,
    componentInfo: menuInfo[openedTab] || { Component: null, props: {} },
  };
};

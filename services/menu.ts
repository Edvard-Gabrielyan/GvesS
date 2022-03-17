import { FC, useMemo, useState } from "react";
import GetStarted from "../components/Header/components/Menu/components/GetStarted/GetStarted";
import LearnMore from "../components/Header/components/Menu/components/LearnMore/LearnMore";
import Product from "../components/Header/components/Menu/components/Product/Product";
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

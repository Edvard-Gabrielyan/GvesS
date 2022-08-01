import React, { FC } from "react";
import { IContainerProps } from "../types/type";

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <section className="global-section">
      <div className="container">{children}</div>
    </section>
  );
};

export default Container;

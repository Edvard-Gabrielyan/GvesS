import React, { FC } from "react";

interface IProps {
  children: string | React.ReactNode;
}

const Container: FC<IProps> = ({ children }) => {
  return (
    <section className="global-section">
      <div className="container">{children}</div>
    </section>
  );
};

export default Container;

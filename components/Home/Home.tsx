import React, { FC } from "react";
import { Carousel } from "antd";
import s from "./Home.module.scss";

const Home: FC = () => {
  return (
    <div className={s.homeContainer}>
      <div className={s.homeCarousel}>
        <Carousel autoplay effect="fade" className={s.carousel}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;

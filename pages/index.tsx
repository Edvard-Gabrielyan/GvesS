import { Carousel } from "antd";
import MainLayout from "../components/main-layout/MainLayout";
import useHome from "../services/useHome";

export default function Home() {
  const { data } = useHome();
  console.log(data);
  return (
    <MainLayout>
      <div className="home-page">
        <div className="home-carousel">
          <Carousel autoplay effect="fade">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Carousel>
        </div>
      </div>
    </MainLayout>
  );
}

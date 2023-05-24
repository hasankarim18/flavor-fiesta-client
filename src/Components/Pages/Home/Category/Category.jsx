import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionTitle from "../../../Utils/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="my-8">
      <SectionTitle heading={`order online`} subHeading={`From 11:00am to 10:00pm`} />
      <section>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/assets/home/slide1.jpg" alt="" />
            <h3 className="text-3xl uppercase -mt-40 pb-40 text-white text-center ">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/home/slide2.jpg" alt="" />
            <h3 className="text-3xl uppercase -mt-40 pb-40 text-white text-center ">
              Pizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/home/slide3.jpg" alt="" />
            <h3 className="text-3xl uppercase -mt-40 pb-40 text-white text-center ">
              Soup
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/home/slide4.jpg" alt="" />
            <h3 className="text-3xl uppercase -mt-40 pb-40 text-white text-center ">
              Deserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/home/slide5.jpg" alt="" />
            <h3 className="text-3xl uppercase -mt-40 pb-40 text-white text-center ">
              Salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';/

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Text from "./Text";

const stylingImage = "w-full object-cover h-[30em]";

export const LandingPage = () => {
  return (
    <section id="landing__page" className="h-auto">
      <div className="h-auto">
        <div className="">
          <figure className="">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              loop={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  className={`${stylingImage}`}
                  src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className={`${stylingImage}`}
                  src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className={`${stylingImage}`}
                  src="https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </figure>
          <Text />
          <LandingPage2 />
        </div>
      </div>
    </section>
  );
};

const LandingPage2 = () => {
  return (
    <>
      <figure className="m-5 pt-8 gap-2  grid grid-cols-2">
        <img
          className={`h-full w-full row-span-2`}
          src="https://images.pexels.com/photos/7728347/pexels-photo-7728347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Organic Produce"
        />
        <img
          className={`h-[15em] w-full`}
          src="https://images.pexels.com/photos/7965886/pexels-photo-7965886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Butter and Margarine"
        />
        <img
          className={`h-[15em] w-full`}
          src="https://images.pexels.com/photos/96379/pexels-photo-96379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Seafood"
        />
      </figure>
    </>
  );
};

import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import raindrop from '@/lottie/raindrop.json';
import sun from '@/lottie/sun.json';
import cloudsun from '@/lottie/cloudsun.json';
import thunder from '@//lottie/thunder.json';
import circle2 from '@/lottie/circle2.json';
import cloud from '@/lottie/cloud.json';
import flikr from '@/lottie/flikr.json';
import frame from '@/lottie/frame.json';
import shape from '@/lottie/shape.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

const Home = () => {
  return (
    <Container>
      <Swiper
        dir="rtl"
        slidesPerView={2.3}
        spaceBetween={80}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={6000}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Lottie animationData={sun} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={cloudsun} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={raindrop} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            <Lottie animationData={thunder} loop={true}></Lottie>
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={circle2} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={cloud} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={flikr} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={frame} loop={true}></Lottie>
        </SwiperSlide>
        <SwiperSlide>
          <Lottie animationData={shape} loop={true}></Lottie>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 3000px;
`;

export default Home;

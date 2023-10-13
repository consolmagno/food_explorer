
import { Container } from "./style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from "react";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// eslint-disable-next-line react/prop-types
export function Section({title, children}){
  return(
    <Container>
      <h3>{title}</h3>
      <Swiper
      breakpoints={{
        100: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        300: {
            slidesPerView: 1.6,
            spaceBetween: 16,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
        750: {
          slidesPerView: 3,
          spaceBetween: 0,
      },
        1000: {
            slidesPerView: 4,
            spaceBetween: 55,
        }
    }}
    navigation={true}
    modules={[Navigation]}
      >
      {
        React.Children.map(children, child =>{
          return(
            <SwiperSlide>{child}</SwiperSlide>
          )
        })
      }
      </Swiper>
    </Container>
  
  )
}
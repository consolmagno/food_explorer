
import { Container } from "./style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from "react";

// eslint-disable-next-line react/prop-types
export function Section({title, children}){
  return(
    <Container>
      <h3>{title}</h3>
      <Swiper
      spaceBetween={16}
      slidesPerView={1.6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
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
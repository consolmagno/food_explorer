import styled from "styled-components";

export const Container = styled.div`
  h3{
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-family: Poppins;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 140%; 
  }

  .swiper {
    height: 100%;
    width: 100%;
  }

  .swiper-slide:hover{
    transform: scale(1.1);
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  }

  @media screen and (min-width: 500px){
    .swiper-button-prev,
    .swiper-button-next{
      height: 100%;
      margin-top: 0;
      top: 0;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      color:  ${({theme}) => theme.COLORS.LIGHT_100};
      font-size: 15px;
      display: block;
      text-align: end;
    }

    @media screen and (min-width: 750px){
      .swiper-button-prev{
      background: var(--gradients-100, linear-gradient(270deg, rgba(0, 10, 15, 0.00) 0%, rgba(0, 10, 15, 0.48) 14.58%, #000A0F 100%));
      justify-content: left;
      width: 6.5rem;
    }

    .swiper-button-next{
      background: var(--gradients-100, linear-gradient(90deg, rgba(0, 10, 15, 0.00) 0%, rgba(0, 10, 15, 0.48) 14.58%, #000A0F 100%));
      justify-content: right;
      width: 9rem;
    }
    }
  }
`
import styled from "styled-components";

const FastAccessStyle = styled.div`
  background-color: #f5f7fa;
  /* background-color: red; */
  /* @media only screen and (max-width: 375px) {
    margin-top: 40px;
  }
  @media only screen and (max-width: 320px) {
    margin-top: 60px;
  } */

  .slide {
    position: relative;
    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      background-color: #247eaf0a;
      border-radius: 12px;
      padding: 10px;
      transition: all 0.5s;
      &:hover {
        transform: scale(1.1);
      }
    }
    .swiper-button-next::after,
    .swiper-button-prev::after {
      display: none;
    }
    .swiper-pagination {
      position: relative;
      bottom: -5px;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* background-color: #247eaf14; */
    }
    .swiper-container {
      width: 480px;
    }

    @media screen and (min-width: 640px) {
      .swiper-container {
        width: 640px;
      }
    }

    @media screen and (min-width: 768px) {
      .swiper-container {
        width: 768px;
      }
    }
  }
`;
export default FastAccessStyle;

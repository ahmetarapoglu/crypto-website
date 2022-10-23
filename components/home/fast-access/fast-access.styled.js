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
    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      border-radius: 8px;
      padding: 0 5px;
      margin-right: 5px !important;
      transition: all 0.5s;
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
      border: 1px solid #e4e4e6 !important;
      border-radius: 12px;
      background-color: #fff;
      cursor: grab;
      &:hover {
        /* transform: translateY(-15px); */
        transform: scale(1.05);
        position: relative;
      }
    }
    .swiper-button-next::after,
    .swiper-button-prev::after {
      display: none;
    }
    .swiper-pagination {
      position: relative;
      z-index: 100;
      bottom: -2px;
    }
    .swiper-slide img {
      display: block;
      /* background-color: #fff; */
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 5px !important;
    }
  }
`;
export default FastAccessStyle;

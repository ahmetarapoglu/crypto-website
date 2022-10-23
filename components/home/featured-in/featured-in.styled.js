import styled from "styled-components";

const FeaturedInStyle = styled.div`
  .featured-in {
    padding: 50px 0;
  }
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
  }
`;
export default FeaturedInStyle;

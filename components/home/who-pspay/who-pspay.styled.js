import styled from "styled-components";

const WhoPspayStyle = styled.div`
  .who-us {
    max-width: 800px;
    height: 500px;
    margin: auto;
    h4 {
      color: #26374c;
      font-weight: 700;
      margin-bottom: 25px;
    }
    p {
      font-size: 1.1rem;
      text-align: justify;
      color: #667c99;
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    font-size: 18px;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px;
  }
  .swiper-scrollbar.swiper-scrollbar-vertical,
  .swiper-vertical > .swiper-scrollbar {
    width: 3px;
    height: 100%;
  }
  .swiper-scrollbar-drag {
    background: #257eaf;
  }
`;
export default WhoPspayStyle;

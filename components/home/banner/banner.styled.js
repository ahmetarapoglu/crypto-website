import styled from "styled-components";
const BannerStyle = styled.div`
  height: 100vh;
  padding: 75px 0;
  background-color: #f5f7fa;
  @media only screen and (max-width: 768px) {
    padding: 10px 0;
    height: 65vh;
  }

  .branner {
    margin-bottom: 75px;
    .banner-content {
      .title {
        font-size: 2.9rem;
        margin-bottom: 50px;
        color: #26374c;
        font-weight: 700;
      }
      .text {
        font-size: 1.2rem;
        margin-bottom: 50px;
        font-weight: 500;
        color: #667c99;
      }
      .get-statred {
        color: #fff;
        padding: 18px 80px;
        background-color: #257eaf;
        border-radius: 12px;
        font-size: 1.1rem;
        margin-bottom: 50px;
        transition: all 0.5s;
        &:hover {
          background-color: #257eafe3;
        }
      }
      @media only screen and (max-width: 768px) {
        .title,
        .text {
          text-align: center;
        }
        .get-statred {
          display: flex;
          justify-content: center;
          width: 50%;
          margin: auto;
          padding: 12px 35px;
          font-size: 1.4rem;
        }
      }
    }
    @keyframes image1 {
      0% {
        transform: translateY(50px);
      }
      100% {
        transform: translateY(-50x);
      }
    }
    @keyframes image2 {
      0% {
        transform: translateY(-75x);
      }
      100% {
        transform: translateY(25px);
      }
    }
    .banner-image {
      position: relative;
      width: 100%;
      height: 400px;

      .image1 {
        animation: image1 5s infinite alternate;
      }
      .image2 {
        animation: image2 5s infinite alternate;
      }
    }
    @media only screen and (max-width: 768px) {
      .banner-image {
        width: 100%;
        height: 200px;
        margin-bottom: 25px;
      }
      .banner-content .title {
        font-size: 1.9rem;
        margin-bottom: 10px;
      }
      .banner-content .text {
        font-size: 1.1rem;
        margin-bottom: 10px;
      }
    }
  }
`;
export default BannerStyle;

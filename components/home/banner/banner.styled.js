import styled from "styled-components";
const BannerStyle = styled.div`
  height: 100vh;
  padding: 75px 0;
  background-color: #f5f7fa;
  @media only screen and (max-width: 768px) {
    padding: 100px 0 25px 0;
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
        }
      }
    }
    .banner-image {
      position: relative;
      width: 100%;
      height: 250px;
    }
  }
`;
export default BannerStyle;

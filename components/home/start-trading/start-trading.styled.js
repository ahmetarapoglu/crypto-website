import styled from "styled-components";

const StartTradingStyle = styled.div`
  .start-trading {
    .trading-body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .content-content {
        border: 1px solid #e4e4e6;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 20px;
        margin: 0 20px 20px 0;
        background-color: #fff;
        border-radius: 6px;
        transition: all 0.5s;
        @media only screen and (max-width: 768px) {
          margin: 0 0 20px 0;
        }
        .content-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 15px;
          .icon {
            display: flex;
            justify-content: center;
            color: #2bcbd7;
            font-size: 1.9rem;
            margin-right: 15px;
          }
          .title {
            color: #26374c;
            font-size: 1.1rem;
          }
        }
        .content {
          color: #667c99;
          max-width: 300px;
          text-align: center;
          font-size: 0.9rem;
        }
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    .trading-button {
      transition: all 0.5s;
      text-align: center;
      margin-top: 18px;
      a {
        border-radius: 20px;
        padding: 12px 28px;
        font-size: 1.1rem;
        background-color: #257eaf;
        color: #fff;
        transition: all 0.6s;
      }
      a:hover {
        transform: translateY(-5px);
        background-color: #26374c;
      }
    }
  }
`;
export default StartTradingStyle;

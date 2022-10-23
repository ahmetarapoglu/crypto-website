import styled from "styled-components";

const FaqStyle = styled.div`
  padding: 50px;
  .faq {
    .colpase {
      .ant-collapse {
        .ant-collapse-item-active
          .ant-collapse-header
          .ant-collapse-header-text {
          color: #257eaf;
        }
        .ant-collapse-header {
          background-color: #f5f8ff;
          border-radius: 25px;
          padding: 18px;
          margin-bottom: 10px;

          &:hover {
            .ant-collapse-header-text {
              color: #257eaf;
            }
          }
          .ant-collapse-expand-icon {
            .ant-collapse-arrow {
              transition: all 0.4s;
              background: #257eaf;
              padding: 10px;
              border-radius: 17px;
            }
            svg {
              color: #fff;
            }
          }
          .ant-collapse-header-text {
            transition: all 0.4s;
            font-size: 0.99rem;
            color: #303948;
            font-weight: 700;
          }
        }
        .ant-collapse-content-box p {
          font-size: 1rem;
          color: #878787;
        }
      }
    }
  }
  .join-us {
    text-align: center;
    background-color: #f7f8fa;
    padding: 50px;
    border-radius: 10px;
    max-width: 800px;
    margin: auto;
    margin-top: 50px;
    p {
      font-size: 1.4rem;
    }
    .link {
      margin-top: 20px;
      transition: all 0.5s;
      a {
        border: 1px solid transparent;
        background-color: #257eaf;
        color: #fff;
        padding: 12px 50px;
        border-radius: 24px;
        font-weight: 600;
        font-size: 1.1rem;
      }
      &:hover {
        transform: translateY(-3px);
      }
    }

    @media only screen and (max-width: 568px) {
      padding: 20px;
      p {
        font-size: 1rem;
      }
      .link a {
        padding: 7px 30px;
      }
    }
  }
`;

export default FaqStyle;

import styled from "styled-components";

const FaqStyle = styled.div`
  padding: 50px;
  .faq {
    .header {
      margin-bottom: 50px;
      h3 {
        font-size: 1.5rem;
        text-align: center;
      }
    }
    .colpase {
      .ant-collapse {
        margin-bottom: 10px;

        .ant-collapse-header {
          background-color: #257eaf;
          .ant-collapse-expand-icon {
            svg {
              color: #fff;
            }
          }
          .ant-collapse-header-text {
            font-size: 1.1rem;
            color: #fff;
          }
        }
        .ant-collapse-content-box p {
          font-size: 1rem;
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

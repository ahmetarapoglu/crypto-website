import styled from "styled-components";
import { Col } from "antd";

export const ColRightStyled = styled(Col)`
  background: #f5f7fa;
  height: calc(100vh - 70px);
  .container {
    max-width: 500px !important;
  }
  .image {
    position: absolute;
    width: 450px;
    height: 450px;
    margin: 75px auto;
    object-fit: contain;
    img {
    }
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
export const ColLeftStyled = styled(Col)`
  .back-to-home {
    background-color: #257eaf;
    color: #fff;
    border-radius: 30px;
    padding: 7px 25px;
    font-size: 0.95rem;
    border: 1px solid #257eaf;
    transition: all 0.5s ease 0s;
    position: relative;
    top: 25px;
    left: 15px;
    display: flex;
    max-width: 125px;
    svg {
      margin-right: 3px;
      font-size: 1.7rem;
    }
    &:hover {
      background-color: transparent;
      color: #257eaf;
    }
  }
  .page-form {
    @media only screen and (max-width: 768px) {
      width: 350px;
    }

    width: 450px;
    margin: 0 auto;
    .header {
      margin: 25px 0;
      h3 {
        font-weight: 700;
        color: #667c99;
        margin-bottom: 10px;
      }
      p {
        color: #667c99;
        font-size: 1.2rem;
      }
    }
    .forget-password {
      color: #257eaf;
      font-size: 0.95rem;
      transition: all 0.5s ease 0s;
      &:hover {
        color: #06527c;
      }
    }
    .form {
      width: 100%;
      margin: auto;
      #email {
        border-radius: 8px;
        padding: 15px;
        &:hover {
          border-color: #247eaf;
        }
      }
      .ant-input:focus,
      .ant-input-focused {
        border-color: #247eaf;
        box-shadow: 0 0 0 2px rgb(36 126 175 / 18%);
      }
      .ant-input-password {
        border-radius: 8px;
        padding: 15px;
        &:hover {
          border-color: #247eaf;
        }
      }
      .ant-input-affix-wrapper:focus,
      .ant-input-affix-wrapper-focused {
        border-color: #247eaf;
        box-shadow: 0 0 0 2px rgb(36 126 175 / 18%);
      }
      .ant-select-selector {
        height: 55px;
        padding: 12px;
        border-radius: 8px;
        &:hover {
          border-color: #247eaf;
        }
      }
      .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
        .ant-select-selector {
        border-color: #247eaf;
        box-shadow: 0 0 0 2px rgb(36 126 175 / 18%);
      }

      .ant-checkbox + span {
        color: #667c99;
        font-size: 0.85rem;
        transition: all 0.7s ease 0s;
        &:hover {
          color: #000;
        }
      }
      button[type="submit"] {
        margin: 25px 0;
        width: 80%;
        border-radius: 10px;
        background: #247eaf;
        border-color: #247eaf;
        height: 50px;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.7s ease 0s;
        &:hover {
          background: #26374c;
        }
      }
      .ant-form-item-control-input-content {
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 768px) {
          /* justify-content: start; */
        }
      }

      .ant-checkbox-checked .ant-checkbox-inner {
        background-color: #247eaf;
        border-color: #247eaf;
      }
      .ant-checkbox-wrapper:hover .ant-checkbox-inner,
      .ant-checkbox:hover .ant-checkbox-inner,
      .ant-checkbox-input:focus + .ant-checkbox-inner {
        border-color: #247eaf !important;
      }

      .ant-checkbox-checked::after {
        border-color: #247eaf;
      }

      .ant-checkbox-indeterminate .ant-checkbox-inner::after {
        background-color: #247eaf;
      }
      .ant-form-item-explain-error {
        color: #e65069;
        font-size: 0.85rem;
        margin: 5px 0;
        font-weight: 500 !important;
      }
      .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
      .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
        background: #fff;
        border-color: #e65069;
      }
    }
    .already {
      text-align: center;
      color: #667c99;
      span {
        font-size: 1.1rem;
      }
      a {
        margin-left: 5px;
        font-weight: 700;
        font-size: 1.15rem;
        &:hover {
          color: #247eaf;
        }
      }
    }
  }
`;
export const FooterStyle = styled.div`
  .title {
    text-align: center;
  }
  .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    .facebook,
    .google {
      border: 1px solid #bdc8d9;
      border-radius: 8px;
      padding: 5px 10px;
      margin: 0 10px;
      transition: all 0.5s ease 0s;
      svg {
        font-size: 1.35rem;
      }
      &:hover {
        background-color: #26374c;
        color: #fff;
      }
    }
  }
  .prmise {
    text-align: center;
    color: #26374c;
    font-size: 0.82rem;
  }
  .already {
    text-align: center;
    color: #667c99;
    span {
      font-size: 1.1rem;
    }
    a {
      margin-left: 5px;
      font-weight: 700;
      font-size: 1.15rem;
      &:hover {
        color: #247eaf;
      }
    }
  }
`;

export const ResetPasswordStyle = styled.div`
  .rest-password {
    position: relative;
    top: 12%;
  }
`;

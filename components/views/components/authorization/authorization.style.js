import styled from "styled-components";
import { Col } from "antd";

export const ColRightStyled = styled(Col)`
  background: #f5f7fa;
  height: 100vh;
  .container {
    max-width: 500px !important;
  }
  .logo {
    margin: 25px 0;
    position: relative;
    width: 55px;
    height: 55px;
    object-fit: contain;
  }
  .image {
    position: relative;
    width: 450px;
    height: 450px;
    margin: auto;
    object-fit: contain;
  }

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;
export const ColLeftStyled = styled(Col)`
  height: 100vh;
  padding: 25px 0;
  @media only screen and (min-width: 992px) {
    .logo {
      display: none;
    }
  }
  .logo {
    margin-left: 25px;
    position: relative;
    width: 55px;
    height: 55px;
    object-fit: contain;
  }
  .signup-form {
    width: 450px;
    margin: 50px auto;
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
    p {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        right: 60px;
        bottom: 8px;
        width: 25%;
        height: 1px;
        background: #dbe1ea;
      }
      &:after {
        content: "";
        position: absolute;
        left: 60px;
        bottom: 8px;
        width: 25%;
        height: 1px;
        background: #dbe1ea;
      }
    }
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
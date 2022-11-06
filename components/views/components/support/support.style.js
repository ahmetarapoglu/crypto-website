import styled from "styled-components";

const SupportStyle = styled.div`
  /* margin: 50px 0; */
  .layout-page {
    background-image: url("/images/contact-bg.jpg");
    background-size: auto 100%;
    height: 35vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #c1dbff45;
    }
  }
  .header {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    h3,
    p {
      color: #fff;
      text-align: center;
    }
    h3 {
      font-weight: 700;
      font-size: 2.5rem;
    }
    p {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }
  .contact-us-form {
    input,
    textarea {
      border-radius: 5px;
      padding: 9px 15px;
      &:hover {
        border-color: #247eaf;
      }
      &:focus {
        border-color: #247eaf;
        outline: 0;
        -webkit-box-shadow: 0 0 0 1px #247eaf5e;
        box-shadow: 0 0 0 1px #247eaf5e;
      }
    }
    button[type="submit"] {
      width: 150px;
      border-radius: 10px;
      background: #247eaf;
      border-color: #247eaf;
      height: 40px;
      font-weight: 600;
      font-size: 1.1rem;
      transition: all 0.7s ease 0s;
      &:hover {
        background: #26374c;
      }
    }

    .ant-form-item-explain-error {
      color: #ff4d4f;
      font-size: 0.85rem;
      margin: 5px 0;
      font-weight: 500 !important;
    }
    .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
    .ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover {
      background: #fff;
      border-color: #ff4d4f;
    }
  }
  .contact-us {
    .content-header {
      margin-bottom: 35px;
      h3 {
        font-weight: 700;
        font-size: 1.7rem;
        color: #257eaf;
        margin-bottom: 10px;
      }
      p {
        font-size: 0.95rem;
        color: #667c99;
        text-align: justify;
      }
    }
    .email,
    .phone {
      padding: 15px 15px;
      border-radius: 8px;
      background-color: #fff;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      text-align: center;
      span {
        margin-bottom: 10px;
      }
      .icon {
        font-size: 1.4rem;
        color: #257eaf;
      }
      h3 {
        font-size: 1.15rem;
        color: #26374c;
        margin: 8px 0;
      }
      a {
        font-size: 0.9rem;
        color: #667c99;
      }
    }
  }
`;

export default SupportStyle;

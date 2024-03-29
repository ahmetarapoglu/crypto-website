import styled from "styled-components";

const FooterStyle = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 25px 0 0 0;
  border-top: 1px solid #e5e8ed;
  /* background: url("/images/footer-bg.png") no-repeat;
  background-position: center center;
  background-size: cover; */
  background: #f5f8ff;
  .footer {
    .footer-menu {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      border-bottom: 1px solid #e5e8ed;
      //responsive
      @media (max-width: 568px) {
        justify-content: start;
        .footer-menu-content {
          padding: 0 10px;
        }
      }
      @media (max-width: 410px) {
        justify-content: start;
      }
      .footer-menu-content:not(:first-child) {
        margin-bottom: 32px;
        ul li {
          transition: all 0.5s;
          &:hover {
            transform: scale(1.1);
            a {
              color: #257eaf;
            }
          }
        }
      }
      .footer-menu-content:first-child {
        margin-bottom: 32px;
        &:first-child {
          max-width: 150px;
        }
      }
    }

    .footer-heading {
      display: inline-flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      padding-bottom: 8px;
      color: #257eaf;
      position: relative;
      margin-bottom: 8px;
      &:before {
        content: "";
        position: absolute;
        width: 40%;
        height: 4px;
        bottom: 0;
        left: 0;
        border-radius: 5px;
        background-color: #257eaf;
      }
    }
    ul li a {
      display: block;
      font-size: 0.8rem;
      font-weight: 400;
      color: #26374c;
      padding-bottom: 8px;
      transition: 0.3s;
    }
    .social-media {
      display: flex;
      align-items: center;
      .socialmedia-link {
        border: 1px solid #bdc8d9;
        padding: 10px;
        font-size: 1.3rem;
        border-radius: 10px;
        background-color: #fff;
        transition: all 0.1s;
        a {
          svg {
            display: flex;
          }
        }

        &:not(:last-child) {
          margin-right: 8px;
        }
        color: #26374c;
      }

      .facebook {
        background-color: #3b5998;
        border-color: #3b5998;
        color: #fff;
      }
      .telegram {
        background-color: #229ed9;
        border-color: #229ed9;
        color: #fff;
      }
      .instegram {
        background: linear-gradient(
          to bottom,
          #9736b6 0%,
          #aa33b0 32%,
          #c82e9a 33%,
          #ce2b92 66%,
          #d72e83 67%,
          #dd2b73 67%,
          #ffc86c 100%
        );
        border-color: linear-gradient(
          to bottom,
          #9736b6 0%,
          #aa33b0 32%,
          #c82e9a 33%,
          #ce2b92 66%,
          #d72e83 67%,
          #dd2b73 67%,
          #ffc86c 100%
        );
        color: #fff;
      }
      .twitter {
        background-color: #1da1f2;
        border-color: #1da1f2;
        color: #fff;
      }
    }
    .button {
      margin-top: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5em;
      border: 1px solid #26374c;
      background-color: #26374c;
      color: #fff;
      padding: 5px 10px;
      border-radius: 8px;
      height: 32px;
      font-size: 0.9rem;
      transition: all 0.5s;
      &:hover {
        background-color: #257eaf;
        border-color: #257eaf;
      }
    }
    .pspay p {
      color: #28384c;
      font-size: 0.8rem;
      text-align: center;
      padding: 20px 0;
      font-weight: 600;
    }
  }
`;

export default FooterStyle;

import styled from "styled-components";

const FooterStyle = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 50px 0;

  .footer-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    //responsive
    @media (max-width: 568px) {
      justify-content: center;
      .footer-menu-content {
        padding: 0 20px;
      }
    }
    @media (max-width: 410px) {
      justify-content: center;
    }
    .footer-menu-content {
      /* padding: 0 50px; */

      /* flex-flow: column nowrap; */
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
  }

  .footer-heading {
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 8px;
    color: #257eaf;
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
      border-radius: 7px;
      padding: 4px 6px;
      background-color: #fff;
      transition: all 0.1s;
      &:not(:last-child) {
        margin-right: 8px;
      }
      color: #26374c;
    }
    a:hover {
      color: #fff;
    }
    .facebook:hover {
      background-color: #3b5998;
      border-color: #3b5998;
      color: #fff;
    }
    .telegram:hover {
      background-color: #229ed9;
      border-color: #229ed9;
      color: #fff;
    }
    .instegram:hover {
      /* background: linear-gradient(
        to bottom,
        #9736b6 0%,
        #aa33b0 32%,
        #c82e9a 33%,
        #ce2b92 66%,
        #d72e83 67%,
        #dd2b73 67%,
        #ffc86c 100%
      ); */
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
    .twitter:hover {
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
    border: 1px solid #bdc8d9;
    background-color: #fff;
    color: red;
    padding: 5px 10px;
    color: #26374c;
    border-radius: 8px;
    height: 32px;
    font-size: 0.9rem;
    transition: all 0.5s;
    &:hover {
      background-color: #26374c;
      border-color: #26374c;
      transform: translateY(-2px);
      a {
        color: #fff;
      }
    }
  }
  &:before {
    content: "";
    position: absolute;
    background-color: #ebeef2;
    width: 80%;
    height: 1px;
    margin: auto;
    top: 0;
    left: 10%;
    /* transform: translate(15%, 0); */
  }
`;

export default FooterStyle;

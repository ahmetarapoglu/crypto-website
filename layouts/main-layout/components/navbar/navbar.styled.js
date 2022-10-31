import styled from "styled-components";

const NavbarStyle = styled.div`
  margin: auto;
  .header {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      position: relative;
      width: 150px;
      height: 50px;
      img {
        object-fit: contain;
      }
      @media only screen and (max-width: 768px) {
        width: 125px;
        height: 45px;
      }
      img {
        /* width: 100%;
        height: 100%; */
      }
    }
    //For Desktop Screen
    .navbar-menu-lg {
      padding: 12px 0;
      .navbar-desktop-menue {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        .navbar-item {
          padding: 12px 12px;
          font-size: 0.85rem;
          color: #26374c;
          .nav-item-link {
            font-weight: 600;
            color: #031d44;
            position: relative;
          }
          .nav-item-link::before {
            transition: all 0.5s;
            height: 3px;
            content: "";
            position: absolute;
            background-color: #257eaf;
            width: 0%;
            bottom: -10px;
          }
          &:hover .nav-item-link::before {
            color: #257eaf !important;
            width: 100%;
            border-radius: 8px;
          }
        }
        .login {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-left: 50px;
          .signin,
          .signup {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2px 28px;
            border-radius: 8px;
            transition: all 0.5s;
          }
          .signin {
            border: 1.5px solid transparent;
            background-color: #257eaf;
            color: #fff;
            margin-right: 15px;
            &:hover {
              background-color: #257eafe3;
              border-color: #bdc8d9;
              color: #fff;
            }
          }
          .signup {
            border: 1.5px solid #bdc8d9;
            background-color: #fff;
            color: #26374c;
            &:hover {
              background-color: #26374c;
              border-color: #26374c;
              color: #fff;
            }
          }
        }
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    //For Mobile Screen
    .navbar-menu-md {
      display: none;
      padding: 10px 0;
      @media screen and (max-width: 768px) {
        display: block;
        .icon {
          font-size: 2.1rem;
          cursor: pointer;
          color: #257eaf;
        }
        .navbar-mobile-menu {
          overflow: hidden;
          background-color: #fff;
          position: absolute;
          width: 100%;
          right: 0;
          top: 57px;
          padding: 20px 15px 35px 15px;
          border-top: 1px solid #ebeef2;
          .navbar-item {
            padding: 0 0 14px 12px;
            font-size: 1.1rem;
            color: #26374c;
            font-weight: 500;
            a {
              transition: all 0.5s;
            }
            &:hover a {
              color: #257eaf;
              padding-left: 15px;
            }
          }
          .login {
            display: flex;
            align-items: center;
            justify-content: center;
            .signin,
            .signup {
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 6px 60px;
              border-radius: 26px;
              font-size: 1.2rem;
              transition: all 0.5s;
              @media screen and (max-width: 420px) {
                padding: 4px 45px;
              }
            }
            .signin {
              border: 1.5px solid transparent;
              background-color: #257eaf;
              color: #fff;
              margin-right: 15px;
              &:hover {
                background-color: #257eafe3;
                border-color: #bdc8d9;
                color: #fff;
              }
            }
            .signup {
              border: 1.5px solid #bdc8d9;
              background-color: #fff;
              color: #26374c;
              &:hover {
                background-color: #26374c;
                border-color: #26374c;
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`;

export default NavbarStyle;

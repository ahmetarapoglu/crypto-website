//utils
import { Container } from "react-bootstrap";
//nextjs
import Link from "next/link";
//style
import FooterStyle from "./footer.styled";
import styled from "styled-components";
//icons
import { RiFacebookFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";

const FindUsStyle = styled.div`
  margin-bottom: 32px;
  @media only screen and (max-width: 474px) {
    padding: 0 20px;
  }
  .our-logo {
    position: relative;
    width: 55px;
    height: 55px;
    margin-bottom: 20px;
  }

  p {
    max-width: 250px;
    font-size: 0.78rem;
    text-align: justify;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <div className="footer">
          <div className="footer-menu">
            <div className="footer-menu-content">
              <h2 className="footer-heading">Contact Us</h2>
              <ul>
                <li style={{ maxWidth: "250px" }}>
                  <Link href="#">
                    <a>
                      Paşabağı, 63040 Haliliye/Şanlıurfa A108 Adam Street New
                      York.
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="tel:05345642132">
                    <a>(90) 534 564 21 32</a>
                  </Link>
                </li>
                <li>
                  <Link href="tel:05345642132">
                    <a>(90) 534 253 58 32</a>
                  </Link>
                </li>
                <li>
                  <Link href="mailto:pspay@info.com">
                    <a>pspay@info.com</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-menu-content">
              <h2 className="footer-heading">Services</h2>
              <ul>
                <li>
                  <Link href="#">
                    <a>Buy Bitcoin</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Buy Ethereum</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Buy Cryptocurrency</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>BTC to USD</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Sell Bitcoin (BTC)</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Sell Ethereum</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Bitcoin Exchange</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-menu-content">
              <h2 className="footer-heading">Information</h2>
              <ul>
                <li>
                  <Link href="#">
                    <a>Buy Bitcoin</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Buy Ethereum</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Buy Cryptocurrency</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>BTC to USD</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Sell Bitcoin (BTC)</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Sell Ethereum</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Bitcoin Exchange</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-menu-content">
              <h2 className="footer-heading">About</h2>
              <ul>
                <li>
                  <Link href="#">
                    <a>Buy Bitcoin</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Buy Ethereum</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Buy Cryptocurrency</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>BTC to USD</a>
                  </Link>
                </li>
              </ul>
            </div>

            <FindUsStyle>
              {/* <div className="our-logo">
                <Image src="/images/logo.png" layout="fill" />
              </div> */}
              <p>
                serves United States residents only in jurisdictions where it is
                licensed to operate as a Money Service Business (MSB Activities
                409 499). Registered address: 900 E Diehl Rd
              </p>
              <div className="social-media">
                <div className="socialmedia-link facebook">
                  <Link href="#">
                    <a target="_blank">
                      <RiFacebookFill />
                    </a>
                  </Link>
                </div>
                <div className="socialmedia-link telegram">
                  <Link href="#">
                    <a target="_blank">
                      <FaTelegramPlane />
                    </a>
                  </Link>
                </div>
                <div className="socialmedia-link instegram">
                  <Link href="#">
                    <a target="_blank">
                      <SiInstagram />
                    </a>
                  </Link>
                </div>
                <div className="socialmedia-link twitter">
                  <Link href="#">
                    <a target="_blank">
                      <BsTwitter />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="button">
                <Link href="#">pspay status</Link>
              </div>
            </FindUsStyle>
          </div>
          <div className="pspay">
            <p>Copyright©2022 | Pspay | All copy reserved</p>
          </div>
        </div>
      </Container>
    </FooterStyle>
  );
};

export default Footer;

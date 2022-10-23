//utils
import Container from "@/components/utils/container";
//nextjs
import Link from "next/link";
//style
import FooterStyle from "./footer.styled";
//icons
import { RiFacebookFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <div className="footer-menu">
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
            <h2 className="footer-heading">Tools</h2>
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
          <div className="footer-menu-content">
            <h2 className="footer-heading">Follow</h2>
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
          </div>
        </div>
      </Container>
    </FooterStyle>
  );
};

export default Footer;

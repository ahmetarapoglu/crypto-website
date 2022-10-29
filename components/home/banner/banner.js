//react
import { useRef } from "react";
//bootstrap
import { Col, Row } from "react-bootstrap";

//bootstrap
import { Container } from "react-bootstrap";
//styles
import BannerStyle from "./banner.styled";

//next
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <BannerStyle>
      <Container>
        <div className="branner">
          <Row>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <div className="banner-content">
                <h3 className="title">
                  Send and receive crypto from anywhere, anytime!
                </h3>
                <p className="text">
                  Get started with the most trusted and secure way to transfer
                  and withdraw your crypto currencies.
                </p>
                <Link href="#">
                  <a className="get-statred">Get Started</a>
                </Link>
              </div>
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
              {/* <div className="banner-image">
                <Image src={"/delete/banner.png"} layout="fill" />
              </div> */}
              <div className="banner-image">
                <Image
                  src={"/images/about-img.png"}
                  className="image1"
                  layout="fill"
                />
                <Image
                  src={"/images/promo-bg.png"}
                  className="image2"
                  layout="fill"
                />
              </div>{" "}
            </Col>
          </Row>
        </div>
      </Container>
    </BannerStyle>
  );
};

export default Banner;

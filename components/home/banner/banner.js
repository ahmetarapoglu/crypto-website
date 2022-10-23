//react
import { useRef } from "react";
//ant desgin
import { Col, Row } from "antd";
//utils
import Container from "@/components/utils/container";
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
            <Col lg={12}>
              <div className="banner-content">
                <h3 className="title">
                  A trusted and secure bitcoin and crypto exchange
                </h3>
                <p className="text">
                  Get started with the easiest and most secure platform to buy,
                  sell, trade, and earn cryptocurrencies.
                </p>
                <Link href="#">
                  <a className="get-statred">Get Started</a>
                </Link>
              </div>
            </Col>
            <Col lg={12}>
              <div className="banner-image">
                <Image src={"/delete/banner.png"} layout="fill" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </BannerStyle>
  );
};

export default Banner;

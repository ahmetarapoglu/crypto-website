import AboutStyle from "./about.style";
import { Container } from "react-bootstrap";
import AboutUs from "@/components/home/about-us/about-us";
import { GrCluster } from "react-icons/gr";
import { Col, Row } from "antd";
import Image from "next/image";

const AboutPage = () => {
  return (
    <AboutStyle>
      <Container>
        <div className="header">
          <h3>
            <span>Our mission</span> is to provide a gateway into the world of
            an open financial system
          </h3>
        </div>
        <div className="section-1">
          <Row gutter={[50, 50]}>
            <Col md={12}>
              <div className="about-1">
                <Image
                  src="/images/about-1.png"
                  width={500}
                  height={500}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  quality={100}
                />
                <p className="text">
                  We are a regulated multi-functional cryptocurrency exchange
                  established in 2013 and now serving over 4 million customers
                  worldwide.
                </p>
              </div>
            </Col>
            <Col md={12}>
              <div className="about-2">
                <Image
                  src="/images/about-2.png"
                  width={500}
                  height={700}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    padding: "50px",
                  }}
                  quality={100}
                />
              </div>
            </Col>
          </Row>
        </div>
        <AboutUs header={false} />
        <div className="section-2">
          <Row gutter={[50, 50]}>
            <Col md={12}>
              <div className="about-3">
                <Image
                  src="/images/about-3.png"
                  width={500}
                  height={700}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  quality={100}
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="about-4">
                <p>
                  CEX.IO was one of the first platforms to make fiat-to-crypto
                  transactions accessible by offering card payments and bank
                  transfers to the clients. We place a great effort into
                  developing and maintaining robust relationships with dozens of
                  reputable banks across the key markets.
                </p>
                <p>
                  Currently, we provide a rich variety of trading tools for
                  Bitcoin, Bitcoin Cash, Ethereum, Ripple, Stellar, Litecoin,
                  Tron, and other crypto assets. You can trade these
                  cryptocurrencies for USD, EUR, and GBP.
                </p>
                <p>
                  We know that mobility matters, so we’ve enabled trading
                  through a website, iOS and Android mobile apps, WebSocket, and
                  REST API.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="our-values">
          <div className="header">
            <h3>Our values</h3>
          </div>
          <div className="content">
            <Row gutter={[100, 100]}>
              <Col md={12}>
                <div className="content-card">
                  <div className="content-card-header">
                    <span className="icon">
                      <GrCluster />
                    </span>
                    <h3 className="title">Customer centricity</h3>
                  </div>
                  <div className="content-card-body">
                    <p>
                      At CEX.IO, we put our customers at the core of our
                      business. We’re passionate about creating services that
                      support customers with a great experience toward their
                      goals. Do we seek to innovate? Certainly. And before all
                      endeavors, we ask our team to start with three simple
                      questions: Do I understand the customer’s needs? Am I
                      minimizing customer efforts? How does this increase
                      customer value? If they’re ready to answer, then we go
                      ahead!
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="content-card">
                  <div className="content-card-header">
                    <span className="icon">
                      <GrCluster />
                    </span>
                    <h3 className="title">Customer centricity</h3>
                  </div>
                  <div className="content-card-body">
                    <p>
                      At CEX.IO, we put our customers at the core of our
                      business. We’re passionate about creating services that
                      support customers with a great experience toward their
                      goals. Do we seek to innovate? Certainly. And before all
                      endeavors, we ask our team to start with three simple
                      questions: Do I understand the customer’s needs? Am I
                      minimizing customer efforts? How does this increase
                      customer value? If they’re ready to answer, then we go
                      ahead!
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="content-card">
                  <div className="content-card-header">
                    <span className="icon">
                      <GrCluster />
                    </span>
                    <h3 className="title">Customer centricity</h3>
                  </div>
                  <div className="content-card-body">
                    <p>
                      At CEX.IO, we put our customers at the core of our
                      business. We’re passionate about creating services that
                      support customers with a great experience toward their
                      goals. Do we seek to innovate? Certainly. And before all
                      endeavors, we ask our team to start with three simple
                      questions: Do I understand the customer’s needs? Am I
                      minimizing customer efforts? How does this increase
                      customer value? If they’re ready to answer, then we go
                      ahead!
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <div className="content-card">
                  <div className="content-card-header">
                    <span className="icon">
                      <GrCluster />
                    </span>
                    <h3 className="title">Customer centricity</h3>
                  </div>
                  <div className="content-card-body">
                    <p>
                      At CEX.IO, we put our customers at the core of our
                      business. We’re passionate about creating services that
                      support customers with a great experience toward their
                      goals. Do we seek to innovate? Certainly. And before all
                      endeavors, we ask our team to start with three simple
                      questions: Do I understand the customer’s needs? Am I
                      minimizing customer efforts? How does this increase
                      customer value? If they’re ready to answer, then we go
                      ahead!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </AboutStyle>
  );
};

export default AboutPage;

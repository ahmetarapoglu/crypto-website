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
                    borderRadius: "6px",
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
                  height={600}
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
                  height={600}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "6px",
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
        <div className="section-3">
          <Row gutter={[50, 50]}>
            <Col md={12}>
              <div className="about-5">
                <p>
                  CEX.IO is a team of over 370 professionals serving customers
                  worldwide out of the following jurisdictions: USA, Gibraltar
                  and Cyprus. Our geographical expansion to new markets is
                  backed by our regulatory accomplishments and development of
                  new services for specific audiences.
                  <br />
                  <br /> Over the last few years, CEX.IO has grown into a group
                  of companies with licenses in multiple jurisdictions.
                  <br />
                  <br /> CEX.IO Limited received a Distributed Ledger Technology
                  (DLT) license issued by the Gibraltar Financial Services
                  Commission (GFSC). CEX.IO Corp. has obtained Money Transmitter
                  Licenses (MTLs) in 33 US states, and keep on working on
                  covering more. CEX IO EU Limited provides card processing
                  services to customers from the European Economic Area (EEA).
                  We continue to build new services and improve upon existing
                  ones. Earning your trust is always on our mind. <br /> <br />{" "}
                  Throughout our company’s history, effective and trustworthy
                  collaboration with regulators has always been a top priority.
                  <br /> <br /> Our teams are constantly working to maintain our
                  compliance with evolving regulatory requirements and financial
                  industry standards. CEX.IO was proud to be a founding member
                  of CryptoUK, an association that continues to aim at building
                  cooperation between the major cryptocurrency players and
                  regulatory authorities in the UK, with the goal of developing
                  an appropriate operating framework for cryptocurrency
                  businesses.
                </p>
              </div>
            </Col>
            <Col md={12}>
              <Image
                src="/images/about-4.png"
                width={500}
                height={800}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "6px",
                }}
                quality={100}
              />
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

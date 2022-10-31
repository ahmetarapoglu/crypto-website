import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { FiDatabase } from "react-icons/fi";
import { CiGrid41, CiShare2 } from "react-icons/ci";
import {
  FeaturesSectionStyle,
  MobileInstallStyle,
  TopSectionStyle,
  WahtSectionStyle,
} from "./mobile.style";

const MobilePage = () => {
  return (
    <>
      {/* section One */}
      <TopSectionStyle>
        <Container>
          <Row gutter={(16, 16)}>
            <Col lg={12}>
              <div className="top-sectiopn-content">
                <div className="content-section-header">
                  <h3 className="title">Buy. Sell. Earn.</h3>
                  <p className="text">
                    With the CEX.IO mobile app, you can enjoy the freedom of
                    money at the touch of a button. Buy, sell, earn, and
                    exchange crypto anywhere and anytime. Our goal is to
                    simplify access to the open financial system and make crypto
                    and fiat transactions affordable and attractive. Time to do
                    money the way you like.
                  </p>
                </div>
                <div className="content-section-download">
                  <Link href="#">
                    <a>
                      <div className="app-store">
                        <Image
                          src="/images/app-store.svg"
                          quality={100}
                          layout="fill"
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <div className="google-store">
                        <Image src="/images/google-play.svg" layout="fill" />
                      </div>
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <div className="qr-code">
                        <Image src="/images/qr-code.svg" layout="fill" />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={12}>
              <div className="image">
                <Image
                  src="/images/mobile-section.jpg"
                  width={500}
                  height={500}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  quality={100}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </TopSectionStyle>
      {/* section Two */}
      <WahtSectionStyle>
        <Container>
          <div className="header">
            <h3>What’s in it for you?</h3>
          </div>
          <div className="what-section-cards">
            <div className="card">
              <span className="icon">
                <FiDatabase style={{ color: "#0c87f2" }} />
              </span>
              <h3>All-in-one app</h3>
              <p>
                The CEX.IO mobile app features all the functionality of the
                CEX.IO platform to satisfy the needs of every trader. No web
                version required.
              </p>
            </div>
            <div className="card">
              <span className="icon">
                <CiShare2 style={{ color: "#0abf64" }} />
              </span>
              <h3>All-in-one app</h3>
              <p>
                The CEX.IO mobile app features all the functionality of the
                CEX.IO platform to satisfy the needs of every trader. No web
                version required.
              </p>
            </div>
            <div className="card">
              <span className="icon">
                <CiGrid41 style={{ color: "#fab915" }} />
              </span>
              <h3>All-in-one app</h3>
              <p>
                The CEX.IO mobile app features all the functionality of the
                CEX.IO platform to satisfy the needs of every trader. No web
                version required.
              </p>
            </div>
          </div>
        </Container>
      </WahtSectionStyle>
      {/* section Three */}
      <FeaturesSectionStyle>
        <Container>
          <div className="header">
            <h3>Features and benefits</h3>
            <div className="Features-section-cards">
              <div className="card">
                <span className="icon">
                  <FiDatabase style={{ color: "#0c87f2" }} />
                </span>
                <h3>All-in-one app</h3>
                <p>
                  The CEX.IO mobile app features all the functionality of the
                  CEX.IO platform to satisfy the needs of every trader. No web
                  version required.
                </p>
              </div>
              <div className="card">
                <span className="icon">
                  <CiShare2 style={{ color: "#0abf64" }} />
                </span>
                <h3>All-in-one app</h3>
                <p>
                  The CEX.IO mobile app features all the functionality of the
                  CEX.IO platform to satisfy the needs of every trader. No web
                  version required.
                </p>
              </div>
              <div className="card">
                <span className="icon">
                  <CiGrid41 style={{ color: "#fab915" }} />
                </span>
                <h3>All-in-one app</h3>
                <p>
                  The CEX.IO mobile app features all the functionality of the
                  CEX.IO platform to satisfy the needs of every trader. No web
                  version required.
                </p>
              </div>
              <div className="card">
                <span className="icon">
                  <FiDatabase style={{ color: "#0c87f2" }} />
                </span>
                <h3>All-in-one app</h3>
                <p>
                  The CEX.IO mobile app features all the functionality of the
                  CEX.IO platform to satisfy the needs of every trader. No web
                  version required.
                </p>
              </div>
              <div className="card">
                <span className="icon">
                  <CiShare2 style={{ color: "#0abf64" }} />
                </span>
                <h3>All-in-one app</h3>
                <p>
                  The CEX.IO mobile app features all the functionality of the
                  CEX.IO platform to satisfy the needs of every trader. No web
                  version required.
                </p>
              </div>
              <div className="card">
                <span className="icon">
                  <CiGrid41 style={{ color: "#fab915" }} />
                </span>
                <h3>All-in-one app</h3>
                <p>
                  The CEX.IO mobile app features all the functionality of the
                  CEX.IO platform to satisfy the needs of every trader. No web
                  version required.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </FeaturesSectionStyle>
      {/* section Foure*/}
      <MobileInstallStyle>
        <Container></Container>
      </MobileInstallStyle>
    </>
  );
};
export default MobilePage;

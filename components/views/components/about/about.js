import AboutStyle from "./about.style";
import { Container } from "react-bootstrap";
import AboutUs from "@/components/home/about-us/about-us";
import { GrCluster } from "react-icons/gr";
import { Col, Row } from "antd";

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
        <AboutUs header={false} />
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
            </Row>
          </div>
        </div>
      </Container>
    </AboutStyle>
  );
};

export default AboutPage;

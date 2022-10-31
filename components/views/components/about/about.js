import AboutStyle from "./about.style";
import { Container } from "react-bootstrap";

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
      </Container>
    </AboutStyle>
  );
};

export default AboutPage;

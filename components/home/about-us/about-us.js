import AboutUsStyle from "./about-us.styled";
import SectionTitle from "@/components/utils/section-title";
import { Container } from "react-bootstrap";
const AboutUs = ({ header }) => {
  return (
    <AboutUsStyle>
      <Container>
        {!header ? (
          ""
        ) : (
          <SectionTitle
            title="About Us"
            desc="Magnam dolores commodi suscipit Magnam dolores commodi suscipit.."
          />
        )}

        <div className="about-us">
          <div className="body">
            <div className="content">
              <h3 className="title">~4M</h3>
              <p className="rank">Registered users on trade platform</p>
            </div>
            <div className="content">
              <h3 className="title">0%</h3>
              <p className="rank">Customers funds lost</p>
            </div>
            <div className="content">
              <h3 className="title">99%</h3>
              <p className="rank">Countries supported and 48 US States</p>
            </div>
          </div>
        </div>
      </Container>
    </AboutUsStyle>
  );
};

export default AboutUs;

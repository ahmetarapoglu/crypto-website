import AboutUsStyle from "./about-us.styled";
import Container from "@/components/utils/container";
const AboutUs = () => {
  return (
    <AboutUsStyle>
      <Container>
        <div className="about-us">
          <div className="ttile">
            <h3>About us</h3>
          </div>
          <div className="body">
            <div className="content">
              <h3 className="title">2013</h3>
              <p className="rank">Market entry year</p>
            </div>
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

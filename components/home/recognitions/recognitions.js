import RecognitionsStyle from "./recognitions.styled";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@/components/utils/section-title";

const Recognitions = () => {
  return (
    <RecognitionsStyle>
      <Container>
        <div className="recognitions">
          <h3 className="trading-title">Our products received recognition</h3>
          <SectionTitle
            title="Our products received recognition"
            desc="Our products received recognition"
          />

          <div className="recognitions-body">
            <Link href="#">
              <a>
                <div className="content-content">
                  <div className="content-header">
                    <span className="image">
                      <Image src={"/delete/digital.svg"} layout="fill" />
                    </span>
                    <h3 className="title">Payment options</h3>
                  </div>
                  <p className="content">
                    Multiple payment methods: Visa, Mastercard, bank
                    transfer.Protection against DDoS attacks, full data
                    encryption
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </RecognitionsStyle>
  );
};

export default Recognitions;

import StartTradingStyle from "./start-trading.styled";
import Container from "@/components/utils/container";
import { AiFillCreditCard } from "react-icons/ai";
import Link from "next/link";
const Starttrading = () => {
  return (
    <StartTradingStyle>
      <Container>
        <div className="start-trading">
          <h3 className="trading-title">Start trading crypto</h3>
          <div className="trading-body">
            <Link href="#">
              <a>
                <div className="content-content">
                  <div className="content-header">
                    <span className="icon">
                      <AiFillCreditCard />
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
            <Link href="#">
              <a>
                <div className="content-content">
                  <div className="content-header">
                    <span className="icon">
                      <AiFillCreditCard />
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
            <Link href="#">
              <a>
                <div className="content-content">
                  <div className="content-header">
                    <span className="icon">
                      <AiFillCreditCard />
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
            <Link href="#">
              <a>
                <div className="content-content">
                  <div className="content-header">
                    <span className="icon">
                      <AiFillCreditCard />
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
            <Link href="#">
              <a>
                <div className="content-content">
                  <div className="content-header">
                    <span className="icon">
                      <AiFillCreditCard />
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
            <Link href="#">
              <a>
                <div className="content-content">
                  <div className="content-header">
                    <span className="icon">
                      <AiFillCreditCard />
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
          <div className="trading-button">
            <Link href="#">
              <a>Start Trading</a>
            </Link>
          </div>
        </div>
      </Container>
    </StartTradingStyle>
  );
};

export default Starttrading;

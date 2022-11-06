import { Container } from "react-bootstrap";
import CryptocurrenciesStyle from "./cryptocurrencies.styled";
import Table from "react-bootstrap/Table";
import Link from "next/link";
import { FaBtc } from "react-icons/fa";
import SectionTitle from "@/components/utils/section-title";
import { useEffect } from "react";
import axios from "axios";
import axiosConfig from "services/axiosConfig";

const Cryptocurrencies = () => {
  const fetchData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pspay.net/api/frontend/btc-price");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status == 200 && this.status < 300) {
          console.log(this.responseText);
        }
      }
    };
    // try {
    //   // const data = await axiosConfig.get(
    //   //   "https://pspay.net/api/frontend/btc-price"
    //   // );
    //   // const data = await http.request(
    //   //   `https://pspay.net/api/frontend/btc-price`,
    //   //   {
    //   //     headers: { origin: "*", "Content-Type": "application/json" },
    //   //   }
    //   // );
    //   // console.info("data", data);
    // } catch (error) {
    //   console.info("error", error);
    // }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <CryptocurrenciesStyle>
      <Container>
        <div className="cryptocurrencies">
          <SectionTitle title="Top cryptocurrencies" />
          <div className="table">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Currency</th>
                  <th>Price</th>
                  <th>24h Change</th>
                  <th>Market Cap</th>
                  <th>{""}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="crypto-name">
                    <span className="icon">
                      <FaBtc />
                    </span>
                    USDT
                  </td>
                  <td>$19238.3</td>
                  <td>0.69%</td>
                  <td>$43,827,530,244</td>
                  <td className="buy">
                    <Link href="#">
                      <a>Buy</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="crypto-name">
                    <span className="icon">
                      <FaBtc />
                    </span>
                    BTC
                  </td>
                  <td>$19238.3</td>
                  <td>1.55%</td>
                  <td>$68,454,353,607</td>
                  <td className="buy">
                    <Link href="#">
                      <a>Buy</a>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="crypto-name">
                    <span className="icon">
                      <FaBtc />
                    </span>
                    ETH
                  </td>
                  <td>$19238.3</td>
                  <td>0.03%</td>
                  <td>$367,258,320,327</td>
                  <td className="buy">
                    <Link href="#">
                      <a>Buy</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </CryptocurrenciesStyle>
  );
};

export default Cryptocurrencies;

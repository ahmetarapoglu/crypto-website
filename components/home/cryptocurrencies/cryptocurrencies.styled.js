import styled from "styled-components";

const CryptocurrenciesStyle = styled.div`
  .cryptocurrencies {
    padding: 75px 0;

    .table {
      thead tr th {
        color: #667c99;
        font-size: 0.75rem;
      }
      tbody tr td {
        padding: 0.9rem 0.5rem;
      }
      tbody tr td:nth-child(1) {
        font-weight: 600;
        color: #667c99;
      }
      tbody tr td:nth-child(2) {
        font-weight: 700;
        .icon {
          margin-right: 4px;
          color: #fab915;
          font-size: 1.2rem;
          border: 1px solid rgb(235, 238, 242);
          padding: 5px;
          border-radius: 9px;
        }
      }
      tbody tr td:nth-child(3) {
        color: #0abf64;
      }
      tbody tr td:nth-child(4) {
        color: #e65069;
      }
      tbody tr:nth-child(3) {
        border: transparent;
      }
      .buy {
        text-align: end;
        a {
          padding: 9px 28px;
          background-color: #1bb6c1;
          border-radius: 5px;
          color: #fff;
          transition: all 0.6s;
          &:hover {
            background-color: #26374c;
          }
        }
      }
      @media only screen and (max-width: 568px) {
        tbody tr td:nth-child(5) {
          display: none;
        }
        thead tr th:nth-child(5) {
          display: none;
        }
      }
    }
  }
`;
export default CryptocurrenciesStyle;

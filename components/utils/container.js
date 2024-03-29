// /* containers */

import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  max-width: 2000px;
  @media (max-width: 2100px) {
    max-width: 1600px;
  }
  @media (max-width: 2100px) {
    max-width: 1600px;
  }
  @media (max-width: 1700px) {
    max-width: 1400px;
  }
  @media (max-width: 1450px) {
    max-width: 1140px !important;
  }
  @media (max-width: 1200px) {
    max-width: 992px;
    padding: 0px 20px;
  }
  @media (max-width: 691px) {
    max-width: 700px;
  }
`;

export default Container;

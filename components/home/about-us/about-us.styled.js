import styled from "styled-components";

const AboutUsStyle = styled.div`
  margin: 50px 0;
  .about-us {
    padding: 25px;
    background-color: #f7f8fa;
    border-radius: 5px;
    .ttile {
      text-align: center;
      font-size: 1.5rem;
      margin-bottom: 15px;
    }
    .body {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .content {
        text-align: center;
        margin: 0 20px 20px 0;
        max-width: 200px;
        .title {
          font-size: 2.8rem;
        }
        .rank {
          font-size: 1.2rem;
        }
      }
    }
  }
`;
export default AboutUsStyle;

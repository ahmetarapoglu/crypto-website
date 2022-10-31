import styled from "styled-components";

const AboutStyle = styled.div`
  padding: 50px;
  .header {
    max-width: 80%;
    h3 {
      font-size: 2.5rem;
      color: #257eaf;
      span {
        color: #667c99;
        font-size: 2.9rem;
      }
    }
  }
  .our-values {
    .header {
      width: 150px;
      margin: auto;
      margin-bottom: 50px;
      h3 {
        color: #667c99;
        font-size: 1.5rem;
      }
    }
    .content {
      .content-card {
        border-bottom: 1px solid rgba(189, 200, 217, 0.5);
        padding-bottom: 25px;
        .content-card-header {
          display: flex;
          align-items: center;
          justify-content: start;
          margin-bottom: 15px;
          .icon {
            font-size: 2.3rem;
            margin-right: 15px;
            svg {
              color: #257eaf;
            }
          }
          .title {
            color: #031d44;
            font-size: 1.1rem;
          }
        }
        .content-card-body {
          p {
            text-align: justify;
            color: #667c99;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
export default AboutStyle;

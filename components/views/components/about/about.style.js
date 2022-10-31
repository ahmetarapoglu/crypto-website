import styled from "styled-components";

const AboutStyle = styled.div`
  padding: 50px;
  .header {
    max-width: 80%;
    margin-bottom: 100px;
    h3 {
      font-size: 2.5rem;
      color: #1bb6c1;
      span {
        color: #667c99;
        font-size: 2.9rem;
      }
    }
  }
  .section-1 {
    .about-1 {
      p {
        margin-top: 35px;
        font-size: 1.1rem;
        color: #667c99;
      }
    }
  }
  .section-2 {
    margin-bottom: 50px;
    .about-4 {
      p {
        font-size: 1.2rem;
        color: #667c99;
        text-align: justify;
      }
      p:nth-child(2) {
        background: #f1f8ff;
        padding: 25px;
        border-radius: 6px;
      }
    }
  }
  .section-3 {
    margin-bottom: 50px;
    p {
      font-size: 1.1rem;
      color: #667c99;
      text-align: justify;
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

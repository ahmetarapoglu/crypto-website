import styled from "styled-components";

export const TopSectionStyle = styled.div`
  background-color: #f5f7fa;
  padding: 50px 0;
  .top-sectiopn-content {
    .content-section-header {
      margin-bottom: 50px;
      h3 {
        color: #26374c;
        font-size: 2.8rem;
        margin-bottom: 15px;
      }
      p {
        color: #667c99;
        font-size: 1.1rem;
      }
    }
    .content-section-download {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      .app-store,
      .google-store {
        position: relative;
        height: 100px;
        width: 200px;
        img {
          object-fit: contain;
        }
      }
      .qr-code {
        position: relative;
        height: 60px;
        width: 60px;
        object-fit: content;
      }
    }
  }
  .image span img {
    object-fit: contain;
  }
`;

export const WahtSectionStyle = styled.div`
  background-color: #fff;
  padding: 50px 0;
  .header h3 {
    text-align: center;
    font-size: 2.5rem;
    color: #667c99;
    margin-bottom: 25px;
  }
  .what-section-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .card {
      display: flex;
      padding: 35px;
      max-width: 350px;
      max-height: 300px;
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
        rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
      background-color: #fff;
      margin: 10px;
      .icon {
        svg {
          font-size: 1.9rem;
          color: red;
        }
      }
      h3 {
        margin: 15px 0;
        color: #26374c;
        font-size: 1.5rem;
      }
      p {
        margin-bottom: 10px;
        font-size: 1.1rem;
        color: #667c99;
        text-align: justify;
      }
    }
  }
`;

export const FeaturesSectionStyle = styled.div`
  background-color: #fff;
  padding: 50px 0;
  .header h3 {
    text-align: center;
    font-size: 2.5rem;
    color: #667c99;
    margin-bottom: 25px;
  }
  .Features-section-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .card {
      display: flex;
      padding: 35px;
      max-width: 350px;
      max-height: 300px;
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
        rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
      background-color: #fff;
      margin: 10px;
      .icon {
        svg {
          font-size: 1.9rem;
          color: red;
        }
      }
      h3 {
        margin: 15px 0;
        color: #26374c;
        font-size: 1.5rem;
      }
      p {
        margin-bottom: 10px;
        font-size: 1.1rem;
        color: #667c99;
        text-align: justify;
      }
    }
  }
`;

export const MobileInstallStyle = styled.div`
  background-color: #f5f7fa;
  padding: 50px 0;
`;

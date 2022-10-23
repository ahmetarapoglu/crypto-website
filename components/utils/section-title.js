import styled from "styled-components";

const SectionTitleStyle = styled.div`
  margin-bottom: 35px;
  .section-title {
    text-align: center;
    .title {
      position: relative;
      font-size: 1.7rem;
      font-weight: bold;
      margin-bottom: 20px;
      padding-bottom: 20px;
      color: #2c4964;
      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
      }
      &:after {
        content: "";
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #1977cc;
        bottom: 0;
        left: calc(50% - 20px);
      }
    }
    .desc {
      color: #878e95;
      font-size: 0.88rem;
      max-width: 800px;
      margin: auto;
    }
  }
`;

const SectionTitle = ({ title = "", desc = "" }) => {
  return (
    <SectionTitleStyle>
      <div className="section-title">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
    </SectionTitleStyle>
  );
};

export default SectionTitle;

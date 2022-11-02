import styled from "styled-components";

export const BlogStyle = styled.div``;

export const HeaderBlogSectionStyle = styled.div`
  padding: 50px 0;
  background-color: #f1f8ff;
  text-align: center;
  .title {
    font-size: 2.8rem;
    color: #1bb6c1;
    text-align: center;
    .update {
      color: #667c99;
    }
    margin-bottom: 25px;
  }
  .text {
    font-size: 1.2rem;
    color: #667c99;
    max-width: 580px;
    margin: auto;
  }
`;

export const BlogItemStyle = styled.div`
  border: 1px solid #f1f8ff;
  border-radius: 5px;
  height: 500px;
  max-width: 350px;
  position: relative;
  transition: all 0.5s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px; */
  .image {
  }
  .contents {
    padding: 20px;
    .kategori {
      color: #1bb6c1;
      background-color: rgba(27, 182, 193, 0.1);
      border-color: rgba(27, 182, 193, 0.1);
      border-radius: 3px;
      padding: 5px 8px;
      font-size: 0.8rem;
      font-weight: 600;
    }
    .kategori:not(:first-child) {
      margin: 0 6px;
    }
    .title {
      color: #257eaf;
      font-size: 1.5rem;
      margin: 10px 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    p {
      color: #667c99;
      font-size: 1rem;
      text-align: justify;
      margin-bottom: 10px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .date {
      color: #6d7c90;
      font-size: 0.85rem;
      position: absolute;
      bottom: 15px;
      padding: 0.25rem 0.75rem;
      background: #e8f8f9;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      color: #1bb6c1;
      svg {
        margin-right: 5px;
      }
    }
  }
  &:hover {
    transform: scale(1.04);
  }
`;

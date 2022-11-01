import styled from "styled-components";

export const BlogDetailsStyle = styled.div`
  margin: 50px 0;
  .image {
    position: relative;
    width: 100%;
    height: 500px;
    img {
      border-radius: 5px;
      object-fit: contain;
    }
  }
  .header {
    padding: 35px 0 5px 0;
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
      margin: 15px 0;
    }
    .share-blog {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .date {
        color: #667c99;
        font-size: 0.85rem;
      }
      .social-media {
        display: flex;
        align-items: center;
        .icon {
          position: relative;
          width: 45px;
          height: 45px;
          margin: 0 5px;
        }
      }
    }
    border-bottom: 1px solid #dbe1ea;
  }
  .content {
    padding: 25px 0;
    p {
      color: #667c99;
      font-size: 1rem;
      text-align: justify;
      margin-bottom: 10px;
    }
    h3 {
      margin: 10px 0;
    }
  }
`;

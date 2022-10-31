import styled from "styled-components";

export const BackToTopStyle = styled.span`
  background-color: #1bb6c1;
  color: #fff;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 50px;
  padding: 12px;
  border-radius: 50%;
  margin: auto;
  display: flex;
  z-index: 1;
  transition: all 0.7s ease 0s;
  svg {
    font-size: 1.3rem;
  }
  &:hover {
    background-color: #26374c;
  }
`;

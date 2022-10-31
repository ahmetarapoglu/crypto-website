import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { BackToTopStyle } from "./backToTop.style";

const BackToTop = () => {
  const [buttonVisiable, setButtonVisiable] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setButtonVisiable(true);
      } else {
        setButtonVisiable(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    buttonVisiable && (
      <BackToTopStyle onClick={scrollUp}>
        <BsArrowUp />
      </BackToTopStyle>
    )
  );
};

export default BackToTop;

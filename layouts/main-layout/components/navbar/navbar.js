import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavbarStyle from "./navbar.styled";
// import Container from "react-bootstrap/Container";
import { Container } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

const Navbar = (props) => {
  const [state, setState] = useState(false);
  const ref = useRef(null);
  const handleChangeMenuState = () => {
    setState(!state);
  };

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setState(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return (
    <NavbarStyle>
      <Container>
        <div className="header">
          <div className="logo">
            <Link href="/">
              <a>
                <Image src={"/images/logo/PsPay_Logo.png"} layout="fill" />
              </a>
            </Link>
          </div>
          {/* For Desktop Screen */}
          <div className="navbar-menu-lg">
            <div className="navbar-desktop-menue">
              <div className="navbar-item">
                <Link href="/">
                  <a className="nav-item-link">Home</a>
                </Link>
              </div>
              <div className="navbar-item">
                <Link href="/">
                  <a className="nav-item-link">Blog</a>
                </Link>
              </div>
              <div className="navbar-item">
                <Link href="/about">
                  <a className="nav-item-link">About PSPAY</a>
                </Link>
              </div>
              <div className="navbar-item">
                <Link href="/mobile">
                  <a className="nav-item-link">Mobile App</a>
                </Link>
              </div>
              <div className="navbar-item">
                <Link href="/">
                  <a className="nav-item-link">Support</a>
                </Link>
              </div>
              <div className="login">
                <Link href="sign-in">
                  <a className="signin">signin</a>
                </Link>
                <Link href="sign-up">
                  <a className="signup">signup</a>
                </Link>
              </div>
            </div>
          </div>
          {/* For Mobile Screen */}
          <div className="navbar-menu-md">
            <span className="icon" onClick={handleChangeMenuState}>
              {!state ? <AiOutlineMenu /> : <MdOutlineClose />}
            </span>
            {state && (
              <div className="navbar-mobile-menu" ref={ref}>
                <div className="navbar-item">
                  <Link href="/">
                    <a className="nav-item-link">Home</a>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link href="/">
                    <a className="nav-item-link">Blog</a>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link href="/about">
                    <a className="nav-item-link">About PSPAY</a>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link href="/mobile">
                    <a className="nav-item-link">Mobile App</a>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link href="/">
                    <a className="nav-item-link">Support</a>
                  </Link>
                </div>
                <div className="login">
                  <Link href="sign-in">
                    <a className="signin">signin</a>
                  </Link>
                  <Link href="sign-up">
                    <a className="signup">signup</a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </NavbarStyle>
  );
};

export default Navbar;

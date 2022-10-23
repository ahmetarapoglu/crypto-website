import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavbarStyle from "./navbar.styled";
// import Container from "react-bootstrap/Container";
import Container from "@/components/utils/container";
import { AiOutlineMenu } from "react-icons/ai";
import { CgMathPlus } from "react-icons/cg";

const Navbar = (props) => {
  const [state, setState] = useState(false);
  const ref = useRef(null);
  console.info("ref", ref);
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
                <Image src={"/images/logo.png"} layout="fill" />
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
                <Link href="/">
                  <a className="nav-item-link">Mopile App</a>
                </Link>
              </div>
              <div className="navbar-item">
                <Link href="/">
                  <a className="nav-item-link">Whats Pspay</a>
                </Link>
              </div>
              <div className="navbar-item">
                <Link href="/">
                  <a className="nav-item-link">Contact</a>
                </Link>
              </div>
              <div className="login">
                <Link href="#">
                  <a className="signin">signin</a>
                </Link>
                <Link href="#">
                  <a className="signup">signup</a>
                </Link>
              </div>
            </div>
          </div>
          {/* For Mobile Screen */}
          <div className="navbar-menu-md">
            <span className="icon" onClick={handleChangeMenuState}>
              {!state ? <AiOutlineMenu /> : <CgMathPlus />}
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
                  <Link href="/">
                    <a className="nav-item-link">Mopile App</a>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link href="/">
                    <a className="nav-item-link">Whats Pspay</a>
                  </Link>
                </div>
                <div className="navbar-item">
                  <Link href="/">
                    <a className="nav-item-link">Contact</a>
                  </Link>
                </div>
                <div className="login">
                  <Link href="#">
                    <a className="signin">signin</a>
                  </Link>
                  <Link href="#">
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

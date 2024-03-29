import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavbarStyle from "./navbar.styled";
// import Container from "react-bootstrap/Container";
import { Container } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { Select } from "antd";

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
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
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
                <Link href="/blogs">
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
                <Link href="/support">
                  <a className="nav-item-link">Support</a>
                </Link>
              </div>
              <div className="login">
                <Link href="sign-in">
                  <a className="signin">Sign In</a>
                </Link>
                <Link href="register">
                  <a className="register">Register</a>
                </Link>
              </div>
              <div className="language">
                <Select
                  defaultValue="English"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "Arabic",
                      label: (
                        <img src="/images/syria.png" width={30} height={30} />
                      ),
                    },
                    {
                      value: "English",
                      label: (
                        <img src="/images/english.png" width={30} height={30} />
                      ),
                    },
                  ]}
                />
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
                  <Link href="/blogs">
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
                  <Link href="/support">
                    <a className="nav-item-link">Support</a>
                  </Link>
                </div>
                <div className="login">
                  <Link href="sign-in">
                    <a className="signin">Sign In</a>
                  </Link>
                  <Link href="register">
                    <a className="register">Register</a>
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

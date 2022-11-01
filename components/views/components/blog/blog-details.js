import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BlogDetailsStyle } from "./blog-details.style";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
} from "next-share";
import { BiCalendar } from "react-icons/bi";
const BlogDetailsPage = () => {
  const [href, setHref] = useState();

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   const href = window?.location.href;
    // }
    setHref(window?.location.href);
  }, []);
  return (
    <BlogDetailsStyle>
      <Container>
        <div className="image">
          <Image
            src="/delete/blog.jpg"
            layout="fill"
            quality={100}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="header">
          <Link href="#">
            <a className="kategori">Education</a>
          </Link>
          <Link href="#">
            <a className="kategori">Company updates</a>
          </Link>
          <Link href="#">
            <a className="kategori">Spotlight</a>
          </Link>
          <Link href="#">
            <a className="kategori">Crypto Ecosystem</a>
          </Link>

          <h4 className="title">
            Post-Merge Ethereum: Two Major Challenges to Overcome
          </h4>
          <div className="share-blog">
            <span className="date">
              <BiCalendar />
              Oct 27, 2022
            </span>
            <div className="social-media">
              <FacebookShareButton url={href}>
                <div className="icon">
                  <Link href="#">
                    <a targer="_blank">
                      <Image
                        src="/images/social-media/facebook.png"
                        layout="fill"
                      />
                    </a>
                  </Link>
                </div>
              </FacebookShareButton>
              <TwitterShareButton url={href}>
                <div className="icon">
                  <Link href="#">
                    <a targer="_blank">
                      <Image
                        src="/images/social-media/twitter.png"
                        layout="fill"
                      />
                    </a>
                  </Link>
                </div>
              </TwitterShareButton>
              <WhatsappShareButton url={href}>
                <div className="icon">
                  <Link href="#">
                    <a targer="_blank">
                      <Image
                        src="/images/social-media/whatsapp.png"
                        layout="fill"
                      />
                    </a>
                  </Link>
                </div>
              </WhatsappShareButton>
            </div>
          </div>
        </div>
        <div className="content">
          <p>
            This weekly piece of cryptocurrency price analysis and thought
            leadership is brought to you by the expert team at CEX.IO, your
            crypto guide since 2013. At CEX.IO, we’re committed to providing our
            users with every potential price scenario happening across the
            crypto ecosystem, all from a single resource.This weekly piece of
            cryptocurrency price analysis and thought leadership is brought to
            you by the expert team at CEX.IO, your crypto guide since 2013. At
            CEX.IO, we’re committed to providing our users with every potential
            price scenario happening across the crypto ecosystem, all from a
            single resource. In this edition, we discuss why Bitcoin is primed
            for volatility with liquidations at an all-time low and the open
            interest at an all-time high. In the 35th edition of our Crypto
            Ecosystem Update, we also provide some critical developments
            surrounding Tether, Aave, ApeCoin, and Solana. Read along for
            in-depth breakdowns and enjoy reviews of correlated markets to help
            you make the most informed decisions along your crypto journey.
          </p>

          <h3>Bitcoin is primed for volatility</h3>
          <p>
            Bitcoin volatility is dead at almost zero (see the volatility index
            chart below). While the alpha cryptocurrency has never experienced
            such low volatility in its history, it’s also worth noting that
            almost all prior low-volatility periods ended with an explosive
            movement.
          </p>
        </div>
      </Container>
    </BlogDetailsStyle>
  );
};

export default BlogDetailsPage;

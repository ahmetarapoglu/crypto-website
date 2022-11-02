import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogItemStyle } from "./blog.style";
import { BiCalendar } from "react-icons/bi";
const BlogItem = ({ img, href }) => {
  return (
    <BlogItemStyle>
      <div className="image">
        <Link href={href}>
          <a>
            <Image
              src={img}
              width={350}
              height={250}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "6px 6px 0 0",
              }}
              quality={100}
            />
          </a>
        </Link>
      </div>
      <div class="contents">
        <Link href="#">
          <a className="kategori">Education</a>
        </Link>
        <Link href="#">
          <a className="kategori">Crypto Ecosystem</a>
        </Link>
        <h4 className="title">
          Post-Merge Ethereum: Two Major Challenges to Overcome
        </h4>
        <p className="content">
          Although the Ethereum Merge was a big accomplishment for the entire
          crypto community, there are still a lot of issues. Although the
          Ethereum Merge was a big accomplishment for the entire crypto
          community, there are still a lot of issues.
        </p>
        <span className="date">
          <BiCalendar />
          Oct 27, 2022
        </span>
      </div>
    </BlogItemStyle>
  );
};

export default BlogItem;

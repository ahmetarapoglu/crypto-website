import { Col, Row } from "antd";
import React from "react";
import { Container } from "react-bootstrap";
import { BlogStyle, HeaderBlogSectionStyle } from "./blog.style";
import BlogItem from "./blogItem";

const BlogPage = () => {
  return (
    <BlogStyle>
      <HeaderBlogSectionStyle>
        <Container>
          <h3 className="title">
            Crypto insights & <span className="update">Updates</span> everyday
          </h3>
          <p className="text">
            Don’t miss our daily updates with key information about our
            ecosystem, products, listing, coins, news and more.
          </p>
        </Container>
      </HeaderBlogSectionStyle>
      <Container style={{ margin: "100px auto" }}>
        <Row gutter={[25, 25]} justify="center">
          <Col md={8}>
            <BlogItem img={"/images/bit.png"} href={"/blogs/blog-1"} />
          </Col>
          <Col md={8}>
            <BlogItem img={"/images/bit1.png"} href={"/blogs/blog-2"} />
          </Col>
          <Col md={8}>
            <BlogItem img={"/images/bit2.png"} href={"/blogs/blog-3"} />
          </Col>
          <Col md={8}>
            <BlogItem img={"/images/bit3.png"} href={"/blogs/blog-4"} />
          </Col>
          <Col md={8}>
            <BlogItem img={"/images/bit4.png"} href={"/blogs/blog-5"} />
          </Col>
          <Col md={8}>
            <BlogItem img={"/images/bit5.png"} href={"/blogs/blog-6"} />
          </Col>
        </Row>
      </Container>
    </BlogStyle>
  );
};

export default BlogPage;

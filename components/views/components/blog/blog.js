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
            <BlogItem />
          </Col>
          <Col md={8}>
            <BlogItem />
          </Col>
          <Col md={8}>
            <BlogItem />
          </Col>
          <Col md={8}>
            <BlogItem />
          </Col>
          <Col md={8}>
            <BlogItem />
          </Col>
          <Col md={8}>
            <BlogItem />
          </Col>
        </Row>
      </Container>
    </BlogStyle>
  );
};

export default BlogPage;

import React from "react";
import { Container } from "react-bootstrap";
import SupportStyle from "./support.style";
import { Button, Col, Form, Input, InputNumber, Row } from "antd";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";

const SupportPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <SupportStyle>
      <div className="layout-page">
        <div className="header">
          <h3>Have Some Questions?</h3>
          <p>Send us a message</p>
        </div>
      </div>
      <Container>
        <Row gutter={[50]} style={{ margin: "50px 0" }}>
          <Col xs={24} md={24} lg={12} xl={12}>
            <Form
              form={form}
              name="nest-messages"
              wrapperCol={{ span: 24 }}
              onFinish={onFinish}
              className="contact-us-form"
            >
              <Row gutter={8}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Your Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                      },
                    ]}
                  >
                    <Input placeholder="Your Email" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={8}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Phone Number" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="subject"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="Subject" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                name="message"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Message"
                  autoSize={{
                    minRows: 4,
                    maxRows: 4,
                  }}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col xs={24} md={24} lg={12} xl={12}>
            <div className="contact-us">
              <div className="content-header">
                <h3>Message Us</h3>
                <p>
                  Do not hesitate to contact us for any information or
                  questionDo not hesitate to contact us for any information or
                  question..
                </p>
              </div>
              <Row gutter={[16]}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="email">
                    <span>
                      <HiOutlineMail className="icon" />
                      <h3>Email</h3>
                    </span>
                    <Link href="mailto:ah.ihab.arab3@gmail.com">
                      <a target="_blank">ah.ihab.arab3@gmail.com</a>
                    </Link>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="phone">
                    <span>
                      <BsTelephone className="icon" />
                      <h3>phoneNumber</h3>
                    </span>
                    <Link href="tel:05346919249">
                      <a target="_blank">05346919249</a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </SupportStyle>
  );
};

export default SupportPage;

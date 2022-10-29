import { Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Button, Checkbox, Form, Input, Select } from "antd";
import {
  ColLeftStyled,
  ColRightStyled,
  FooterStyle,
} from "./authorization.style";
import { RiFacebookFill, RiGoogleFill } from "react-icons/ri";

const SignInPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.info("Success:", values);
  };
  return (
    <>
      <Row>
        <ColRightStyled xl={12} lg={12}>
          <div className="container">
            <div className="logo">
              <Link href="/">
                <a>
                  <Image src={"/images/logo.png"} layout="fill" />
                </a>
              </Link>
            </div>
            <div className="image">
              <Image src="/images/sign.png" layout="fill" />
            </div>
          </div>
        </ColRightStyled>
        <ColLeftStyled xl={12} lg={12} xs={24}>
          <div className="logo">
            <Link href="/">
              <a>
                <Image src={"/images/logo.png"} layout="fill" />
              </a>
            </Link>
          </div>
          <div className="signup-form">
            <div className="header">
              <h3>Sign in to your account</h3>
              <p>Securely buy crypto and start trading on a trusted exchange</p>
            </div>
            <Form
              initialValues={{
                remember: true,
              }}
              form={form}
              onFinish={onFinish}
              autoComplete="off"
              className="form"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input placeholder="Email Address" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Sign In
                </Button>
              </Form.Item>
            </Form>
            <FooterStyle>
              <div className="title">
                <p>or sign in with</p>
              </div>
              <div className="social-media">
                <Link href="#">
                  <a className="facebook">
                    <RiFacebookFill />
                  </a>
                </Link>
                <Link href="#">
                  <a className="google">
                    <RiGoogleFill />
                  </a>
                </Link>
              </div>
              <p className="prmise">
                We all never post anything without your permission
              </p>
              <div className="already">
                <span>Don’t have an account?</span>
                <Link href="sign-up">Create account</Link>
              </div>
            </FooterStyle>
          </div>
        </ColLeftStyled>
      </Row>
    </>
  );
};

export default SignInPage;

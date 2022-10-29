import { Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { ColLeftStyled, ColRightStyled } from "./authorization.style";

const SignUpPage = () => {
  const { Option } = Select;
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
              <Image src="/images/signup.png" layout="fill" />
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
              <h3>Create your account</h3>
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
              <Form.Item
                name="Select"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="Please select a country">
                  <Option value="Syria">Syria</Option>
                  <Option value="Turkey">Turkey</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="agree1"
                valuePropName="checked"
                wrapperCol={{
                  offset: 0,
                  span: 20,
                }}
              >
                <Checkbox>
                  I certify that I am 18 years of age or older, and agree to the
                  PSPAY sTerms of UseandPrivacy Policy
                </Checkbox>
              </Form.Item>
              <Form.Item
                name="agree2"
                valuePropName="checked"
                wrapperCol={{
                  offset: 0,
                  span: 20,
                }}
              >
                <Checkbox>
                  I agree to receive occasional emails and newsletters from
                  PSPAY.
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Create Your Account
                </Button>
              </Form.Item>
            </Form>
            <div className="already">
              <span>Already have an account?</span>
              <Link href="sign-in">Sign in</Link>
            </div>
          </div>
        </ColLeftStyled>
      </Row>
    </>
  );
};

export default SignUpPage;

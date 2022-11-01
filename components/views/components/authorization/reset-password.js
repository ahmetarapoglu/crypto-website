import {
  ColLeftStyled,
  ColRightStyled,
  ResetPasswordStyle,
} from "./authorization.style";
import { Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Button, Form, Input } from "antd";
import { BsArrowLeftShort } from "react-icons/bs";
const ResetPasswordPage = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.info("Success:", values);
  };
  return (
    <ResetPasswordStyle>
      <Row>
        <ColRightStyled xl={12} lg={12}>
          <div className="container">
            <div className="image">
              <Image src="/images/forget.png" layout="fill" />
            </div>
          </div>
        </ColRightStyled>
        <ColLeftStyled xl={12} lg={12} xs={24}>
          <Link href="/">
            <a className="back-to-home">
              <BsArrowLeftShort />
              Back
            </a>
          </Link>
          <div className="page-form rest-password">
            <div className="header">
              <h3>Reset password</h3>
              <p>
                To reset your password, enter the email address you use to sign
                in to CEX.IO account
              </p>
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

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        </ColLeftStyled>
      </Row>
    </ResetPasswordStyle>
  );
};

export default ResetPasswordPage;

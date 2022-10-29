//style
import FaqStyle from "./faq.styled";
//utils
import { Container } from "react-bootstrap";
//antdesgin
import { Collapse } from "antd";
import Link from "next/link";
import SectionTitle from "@/components/utils/section-title";

const Faq = () => {
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <FaqStyle>
      <Container>
        <div className="faq">
          <SectionTitle
            title="Frequently Asked Questions"
            desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea."
          />
          <div className="colpase">
            <Collapse
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              ghost
              accordion
            >
              <Panel header="How to register?" key="1">
                <p>
                  By clicking to register button, fill up your information, and
                  verify your email.
                </p>
              </Panel>

              <Panel
                header="What’s the information required to register?"
                key="2"
              >
                <p>Your email, Legal name and strong password.</p>
              </Panel>
              <Panel header="How can I secure my account?" key="3">
                <p>
                  Don’t share your signin information with anyone and you should
                  enable 2FA
                </p>
              </Panel>

              <Panel
                header="How can I deposit money to my PSPAY Account?"
                key="4"
              >
                <p>
                  By clicking on deposit button from your user dashboard and
                  follow up the steps.
                </p>
              </Panel>
              <Panel header="How can I withdraw my money?" key="5">
                <p>
                  By clicking on withdraw button from your user dashboard and
                  follow up the steps.
                </p>
              </Panel>
              <Panel header="Do you have support??" key="6">
                <p>
                  Yes. We do have support working 24/7 , and you can contact us
                  by open a new ticket from your dashboard.
                </p>
              </Panel>
              <Panel
                header="Is the PSPAY wallet you provide to me is mine?"
                key="7"
              >
                <p>Yes. The PSPAY wallet you create it is yours.</p>
              </Panel>
              <Panel
                header="Is there any limits for withdraw or deposit?"
                key="8"
              >
                <p>
                  No, we don’t put limit on any deposit or withdraw request.
                </p>
              </Panel>
              <Panel
                header="From which countries can I withdraw my money?"
                key="9"
              >
                <p>From all over the world.</p>
              </Panel>
            </Collapse>
          </div>
        </div>
        <div className="join-us">
          <p>
            Become part of a global community of people who have found their
            path to the crypto world with CEX.IO
          </p>
          <div className="link">
            <Link href="#">
              <a>Join Pspay</a>
            </Link>
          </div>
        </div>
      </Container>
    </FaqStyle>
  );
};

export default Faq;

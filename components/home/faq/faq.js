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
              <Panel header="FAQ Ne Demek?" key="1">
                <p>{text}</p>
              </Panel>

              <Panel header="Açılımı Nedir?" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header=" FAQ Türkçe anlamı nedir?" key="3">
                <p>{text}</p>
              </Panel>

              <Panel header="FAQ Ne Demek, Açılımı Nedir? " key="4">
                <p>{text}</p>
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

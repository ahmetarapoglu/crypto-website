import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import FlexDiv from "./utils/flex-div";
import CustomImage from "./utils/c-image";
import Text from "./utils/text";
import Link from "next/link";
import { Button } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/modal/actions";
import * as constants from "@/redux/modal/constants";
import useTranslation from "next-translate/useTranslation";

export default function AuthGuard({ children, noRedirect }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { t } = useTranslation("common");

  const { data, status } = useSession();

  useEffect(() => {
    if (status !== "loading") {
      //auth is initialized and there is no user
      if (!data && !noRedirect) {
        router.push(`/auth/login?redirect=${router.asPath}`);
      }
    }
  }, [data, status, router, noRedirect]);

  /* show loading indicator while the auth provider is still initializing */
  if (status === "loading") return <h1>loading ...</h1>;

  // if auth initialized with a valid user show protected page
  if (status !== "loading" && data) {
    if (React.isValidElement(children)) {
      const componentWithProps = React.cloneElement(children, { data: data });
      return componentWithProps;
    }
    return "Error";
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return (
    <FlexDiv
      height={"90vh"}
      justifyContent="center"
      alignItems="center"
      direction="column"
      gap={20}
    >
      {/* <CustomImage
        src="/secure_login.svg"
        imgWidth="100%"
        imgHeight={100}
        width={424}
        layout="responsive"
      /> */}
      <Text as="h1" type="tertiary" size={32} bold="bold">
        {t("messages.plsLogin")}
      </Text>
      {/* <Link href={`/auth/login?redirect=${router.asPath}`}> */}
      <a href="#">
        <Button
          size="large"
          type="primary"
          icon={<LockOutlined />}
          onClick={() => dispatch(openModal(constants.modalType_Login))}
        >
          {t("registerDescLink")}
        </Button>
      </a>
      {/* </Link> */}
    </FlexDiv>
  );
}

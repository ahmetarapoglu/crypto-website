//react
import { useState } from "react";
// global Styles
import GlobalStyles from "../styles/global-styles";

//react Bootstrap Style
import "bootstrap/dist/css/bootstrap.min.css";
//swiper
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
// theme
import Theme from "../config/theme";
// react-query
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// layout
import MainLayout from "../layouts/main-layout";

const layouts = {
  main: MainLayout,
  none: (props) => <>{props.children}</>,
};

function MyApp({ Component, pageProps }) {
  // react-query
  const [queryClient] = useState(() => new QueryClient());
  // setup layout
  const Layout =
    layouts[Component.Layout || "none"] || ((children) => <>{children}</>);
  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Layout>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </Layout>
        {/* The rest of your application */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Theme>
  );
}

export default MyApp;

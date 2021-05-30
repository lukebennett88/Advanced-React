import { AppProps } from "next/app";
import { Layout } from "../components/layout";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/global.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

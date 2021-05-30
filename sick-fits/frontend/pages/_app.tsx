import { AppProps } from "next/app";
import { Layout } from "../components/layout";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/global.css";
import { ApolloProvider } from "@apollo/client";
import type { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import withData from "../lib/with-data";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({
  Component,
  pageProps,
  apollo,
}: AppProps & { apollo: ApolloClient<NormalizedCacheObject> }) {
  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {
    query: undefined,
  };
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

// @ts-ignore
export default withData(App);

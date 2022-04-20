import type { AppProps } from "next/app";
import { Layout } from "@/components/templates/layout/layout";
import { ContextProvider } from "app-context/context-provider";
import "swiper/scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;

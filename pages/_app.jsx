import { NextIntlProvider } from "next-intl";
import localFont from "next/font/local";
import "@/styles/globals.css";

import Layout from "@/src/organisms/layout";

const firaCode = localFont({
  src: [
    {
      path: "../public/fonts/FiraCode-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <main className={firaCode.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </NextIntlProvider>
  );
}

import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import favicon from "../public/favicon.ico";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Rapid Budgeting App</title>
        <link rel="icon" href={favicon.src} />
        <meta
          name="description"
          content="Rapid Budgeting App allows you to get grip on your finances after entering just 4 numbers."
        />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Rapid Budgeting App" />
        <meta
          name="og:description"
          content="Rapid Budgeting App allows you to get grip on your finances after entering just 4 numbers."
        />
        <meta
          name="google-site-verification"
          content="tHYs9rYZNUBjnZZQ_xpR11OOiYkzbmpi3SsDUaV-ItA"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8034542629135305"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

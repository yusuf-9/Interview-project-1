import Head from "next/head";
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/global.css"
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap");
},[])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='description' content="C.S.C Kisaan Centre" />
        <link rel="shortcut icon" href="/favicon.jpg" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"></link>

        <title>CSC Kisan Centre</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
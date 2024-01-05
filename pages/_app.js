import Head from "next/head";
import { Fragment } from "react";
import "/styles/globals.css";
const App = ({ Component, pageProps }) => {

  return (
    <Fragment>
      <Head>
        {/*====== Required meta tags ======*/}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Landscaping Example Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/*====== Title ======*/}
        <title>Landscaping - Example</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;

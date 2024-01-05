import Preloader from "@/src/layouts/Preloader";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "/styles/globals.css";
const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
        {/*====== Favicon Icon ======*/}
        <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/png" />
        {/*====== All Min css ======*/}
        <link rel="stylesheet" href="assets/fonts/fontawesome/css/all.min.css" />
        {/*====== Jquery UI css ======*/}
        <link rel="stylesheet" href="assets/vendor/jquery-ui/jquery-ui.min.css" />
      </Head>
      {loading && <Preloader />}
      {!loading && <Component {...pageProps} />}
    </Fragment>
  );
};
export default App;

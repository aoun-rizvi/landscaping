import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*====== Favicon Icon ======*/}
        <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/png" />
        {/*====== All Min css ======*/}
        <link rel="stylesheet" href="assets/fonts/fontawesome/css/all.min.css" />
        {/*====== Jquery UI css ======*/}
        <link rel="stylesheet" href="assets/vendor/jquery-ui/jquery-ui.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

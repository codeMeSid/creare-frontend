import Document, { Head, Main, NextScript } from "next/document";
const TabLogo = require("../public/assets/tab_icon.svg");

class MyDocument extends Document {
  render() {
    return (
      <html lang={"en"}>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="icon" href={TabLogo}></link>
        </Head>
        <body>
          <noscript></noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

export default MyDocument;

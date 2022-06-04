import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="256x256" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="384x384" href="/favicon.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/favicon.png"
          />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

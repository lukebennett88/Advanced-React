import Document, { Head, Html, Main, NextScript } from "next/document";

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en-AU">
        <body>
          <Head />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;

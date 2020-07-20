import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0"
          />
          {this.props.styleTags}
        </Head>
        <body className="no-js">
          <script
            dangerouslySetInnerHTML={{
              __html: `document.body.classList.remove('no-js');`
            }}
          />
          <script data-ad-client="ca-pub-4860014580980307" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class extends Document {
  static getInitialProps({ renderPage }) {
    return {
      ...renderPage(),
      styles: flush()
    };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/static/favicon.ico" />
          <title> welcome with Next.js</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

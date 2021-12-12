import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=fe85b15004e2d9af95757d74647d37fc&libraries=services"          
          ></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


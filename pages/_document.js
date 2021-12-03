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
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=bf8f2fe681fc19de6de200e324e3e402&libraries=services"          
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


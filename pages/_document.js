import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (

      <Html>
        <Head>
          {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js' /> */}
          <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js' />
          {/* <script src='/js/script.js' /> */}
          <link href='https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css' rel='stylesheet' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js' />

          <link rel='stylesheet' type='text/css' href='//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' />

          <link rel='stylesheet' type='text/css' href='//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css' />
          {/* <script src='https://agrostroitel.ru/wp-content/themes/timber-starter-theme/assets/js/script.js?param=1' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script type='text/javascript' src='//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js' />
      </Html>
    )
  }
}


export default MyDocument


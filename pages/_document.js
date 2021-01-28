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
          {/* <script src='/js/script.js' /> */}

          <link href='https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css' rel='stylesheet' />
          <link rel='stylesheet' type='text/css' href='//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' />
          <link rel='stylesheet' href='owl-carousel/owl.theme.css' />
          <link rel='stylesheet' type='text/css' href='//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css' />
          <script src='https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=e11228c4-a395-4719-b516-0ffa61793a46' type='text/javascript' />
          
          <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js' />
          <script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js' />
          <script type='text/javascript' src='//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js' />
          {/* <script src='https://agrostroitel.ru/wp-content/themes/timber-starter-theme/assets/js/script.js?param=1' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        
      </Html>
    )
  }
}


export default MyDocument


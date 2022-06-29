import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* google fonts preconnect */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        {/* fonts: Cormorant Infant, Montserrat Alternates, Slabo 13px */}
        <link
          href='https://fonts.googleapis.com/css2?family=Tinos:wght@400;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

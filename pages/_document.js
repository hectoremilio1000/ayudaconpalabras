import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* –––––– SEO / OG –––––– */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          property="og:url"
          content="https://ayudaconpalabras.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Suma Con Palabras" />
        <meta property="og:title" content="Suma Con Palabras" />
        <meta
          property="og:description"
          content="Micro-donaciones para enseñar a leer a niñas y niños de zonas rurales."
        />
        {/* Imagen 1200×630 px – mínimo 600×315 según Meta */} {/* 1 */}
        <meta
          property="og:image"
          content="https://ayudaconpalabras.vercel.app/og/logo.png?v=1"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Opcional – solo si quieres estadísticas en Facebook Insights */}
        <meta property="fb:app_id" content="123456789012345" />
        {/* Twitter (ya que estamos) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suma Con Palabras" />
        <meta
          name="twitter:description"
          content="Micro-donaciones para enseñar a leer a niñas y niños de zonas rurales."
        />
        <meta
          name="twitter:image"
          content="https://ayudaconpalabras.vercel.app/og/logo.png?v=1"
        />
      </Head>
      <body>
        <noscript></noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

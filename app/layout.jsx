import { Open_Sans } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";

const geistSans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Mejora el rendimiento de carga de fuentes
});

export const metadata = {
  // Título principal con formato óptimo para SEO
  title: {
    default: "LACEB - Laboratorio de Calibración de Pipetas en México",
    template: "%s | LACEB - Calibración de Pipetas",
  },
  description:
    "Laboratorio mexicano acreditado ISO 17025 especializado en calibración de pipetas de pistón. Servicios de calibración de volumen, mantenimiento preventivo y correctivo para micropipetas de todas las marcas.",

  // Palabras clave para SEO
  keywords: [
    "calibración de pipetas",
    "laboratorio de calibración",
    "pipetas de pistón",
    "calibración de volumen",
    "mantenimiento de pipetas",
    "ISO 17025",
    "micropipetas",
    "calibración México",
    "laboratorio acreditado",
    "pipetas monocanal",
    "pipetas multicanal",
    "verificación de pipetas",
    "certificado de calibración",
    "LACEB",
  ],

  // Autor y propietario
  authors: [{ name: "LACEB S.A. DE C.V.", url: "https://www.laceb-lab.com/" }],

  // Metadatos para robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.laceb-lab.com/",
    languages: {
      "es-MX": "https://www.laceb-lab.com/",
    },
  },

  // Verificación de propietario (para Google Search Console)
  verification: {
    google: "TU_CODIGO_DE_VERIFICACION_GOOGLE", // Reemplaza con tu código
    // yandex: "código de verificación", // Si usas Yandex
    // bing: "código de verificación", // Si usas Bing
  },

  // Open Graph (para redes sociales)
  openGraph: {
    title: "LACEB - Laboratorio de Calibración de Pipetas",
    description:
      "Laboratorio acreditado ISO 17025 especializado en calibración de pipetas de pistón. Servicios de calibración y mantenimiento en México.",
    url: "https://www.laceb-lab.com/",
    siteName: "LACEB",
    images: [
      {
        url: "https://laceb.com/og-image.jpg", // Crea una imagen OG
        width: 1200,
        height: 630,
        alt: "LACEB - Laboratorio de Calibración",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "LACEB - Calibración de Pipetas",
    description:
      "Laboratorio acreditado ISO 17025 especializado en calibración de pipetas de pistón",
    images: ["https://laceb.com/twitter-image.jpg"], // Crea una imagen para Twitter
    creator: "@laceb",
    site: "@laceb",
  },

  // Iconos
  icons: {
    icon: [
      { url: "/Favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" }, // Crea este archivo
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }, // Crea este archivo
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }, // Crea este archivo
    ],
    shortcut: "/favicon.ico",
  },

  // Manifest para PWA
  manifest: "/manifest.json", // Crea este archivo

  // Viewport y tema
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // Theme color
  themeColor: "#2e3192", // Color azul de tu marca

  // Categoría
  category: "laboratorio de calibración, servicios científicos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
        {/* Meta tags adicionales para mejorar SEO */}
        <meta name="geo.region" content="MX" />
        <meta name="geo.placename" content="México" />
        <meta name="geo.position" content="23.6345;-102.5528" />{" "}
        {/* Coordenadas aproximadas de México */}
        <meta name="ICBM" content="23.6345, -102.5528" />
        {/* Meta para verificación de Google Analytics */}
        <meta
          name="google-site-verification"
          content="TU_CODIGO_VERIFICACION"
        />
        {/* Meta para detectar email y teléfono */}
        <meta name="format-detection" content="telephone=no, email=no" />
        {/* Meta para controlar cómo se muestra en búsquedas */}
        <meta name="rating" content="general" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {/* Meta para navegadores móviles */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LACEB" />
        {/* Schema.org markup para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Laboratory",
              name: "LACEB S.A. DE C.V.",
              description:
                "Laboratorio de calibración especializado en pipetas de pistón",
              url: "https://laceb.com",
              logo: "https://laceb.com/Favicon.png",
              image: "https://laceb.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressCountry: "MX",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+52 55 3966 9986",
                contactType: "customer service",
                availableLanguage: ["Spanish", "English"],
              },
              sameAs: [
                "https://www.facebook.com/laceb", // Reemplaza con tus redes
                "https://www.linkedin.com/company/laceb",
                "https://twitter.com/laceb",
              ],
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                name: "ISO 17025:2017",
                description: "Acreditación para laboratorios de calibración",
              },
              knowsAbout: [
                "Calibración de pipetas",
                "Micropipetas de pistón",
                "Mantenimiento de pipetas",
                "Volumen de precisión",
              ],
            }),
          }}
        />
        {/* Datos estructurados para Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LACEB S.A. DE C.V.",
              url: "https://www.laceb-lab.com/",
              logo: "https://laceb.com/Favicon.png",
              foundingDate: "2012",
              description:
                "Empresa mexicana especializada en calibración de pipetas de pistón",
              email: "contacto@laceb.com",
              telephone: "+52 55 3966 9986",
              areaServed: "MX",
            }),
          }}
        />
        {/* Datos estructurados para los servicios */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Calibración de Pipetas",
              provider: {
                "@type": "Organization",
                name: "LACEB S.A. DE C.V.",
              },
              description:
                "Servicio de calibración de pipetas de pistón con certificado ISO 17025",
              areaServed: "MX",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Calibración",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Calibración de micropipetas monocanal",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Calibración de pipetas multicanal",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mantenimiento preventivo de pipetas",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>

        {/* Scripts de analytics (Google Analytics) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Reemplaza con tu ID
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  );
}

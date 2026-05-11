import type { Metadata, Viewport } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

// Google Ads & Google Tag Configuration
const GOOGLE_ADS_ID = 'AW-18149304102'
const GOOGLE_TAG_ID = 'GT-57899HWW'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'XUMA TRAVEL | Premium Travel & Transfers to Las Leñas - Mendoza, Argentina',
  description: 'Premium receptive operator in Mendoza. We integrate transportation, logistics, and travel experiences for agencies and international travelers. Ski packages, wine tours, and premium transfers.',
  keywords: 'Las Leñas transfers, Mendoza travel, ski packages, wine tours, receptive operator Argentina, travel agency partner, premium transfers',
  openGraph: {
    title: 'XUMA TRAVEL | Premium Travel & Transfers to Las Leñas',
    description: 'Your premium receptive operator in Mendoza. Ski packages, wine tours, and transfers.',
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['pt_BR', 'en_US'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0B0B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        {/* Google Tag (gtag.js) - Google Ads & Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Google Tag Configuration
            gtag('config', '${GOOGLE_TAG_ID}');
            
            // Google Ads Configuration
            gtag('config', '${GOOGLE_ADS_ID}');

            // ============================================
            // CONVERSIONES DE GOOGLE ADS
            // ============================================
            // Para agregar una conversión, usa el siguiente código en el evento correspondiente:
            //
            // gtag('event', 'conversion', {
            //   'send_to': '${GOOGLE_ADS_ID}/CONVERSION_LABEL',
            //   'value': 1.0,
            //   'currency': 'ARS'
            // });
            //
            // Ejemplo para conversión de formulario de cotización:
            // gtag('event', 'conversion', {
            //   'send_to': '${GOOGLE_ADS_ID}/formulario_cotizacion',
            // });
            // ============================================
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

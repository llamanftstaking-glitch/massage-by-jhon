import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://johnmassage.com";
const OG_IMAGE = `${SITE_URL}/images/og-cover.jpg`;
const TITLE = "Massage by Jhon — Masaje profesional a domicilio en NYC, 24/7";
const DESCRIPTION =
  "Masaje terapéutico, deportivo, reductivo, drenaje linfático y relajación a domicilio en Nueva York. Disponible 24/7, camilla profesional incluida. Más de 15 años de experiencia. Reserva por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "masaje a domicilio NYC",
    "masajista Nueva York",
    "masaje terapéutico Washington Heights",
    "drenaje linfático NYC",
    "masaje reductivo",
    "maderoterapia Nueva York",
    "mobile massage NYC",
    "home massage New York",
    "24/7 massage NYC",
  ],
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: SITE_URL,
    siteName: "Massage by Jhon",
    locale: "es_US",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Camilla profesional de masaje — Massage by Jhon, NYC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Massage by Jhon",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: "+16469057287",
  image: OG_IMAGE,
  founder: { "@type": "Person", name: "Jhon Rivas Aiken", jobTitle: "Massage Therapist & Personal Trainer" },
  address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" },
  areaServed: [
    { "@type": "City", name: "New York" },
    { "@type": "Place", name: "Washington Heights, Manhattan" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: ["https://www.instagram.com/johns_aiken"],
  makesOffer: [
    "Masaje de Relajación",
    "Masaje Deportivo",
    "Masaje Terapéutico",
    "Masaje Reductivo",
    "Drenaje Linfático",
    "Maderoterapia",
    "Entrenamiento Personal",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${jakarta.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}

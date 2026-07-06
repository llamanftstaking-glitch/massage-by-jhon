import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Massage by Jhon — Masaje profesional a domicilio en NYC",
  description:
    "Masaje terapéutico, deportivo, reductivo y de relajación a domicilio en Nueva York. Camilla profesional incluida. Reserva por WhatsApp. | Professional home-service massage in NYC, table included.",
  openGraph: {
    title: "Massage by Jhon — Masaje a domicilio en NYC",
    description:
      "Masaje profesional a domicilio con camilla incluida. Reserva por WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}

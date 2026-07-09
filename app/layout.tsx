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
  title: "Massage by Jhon — Masaje profesional a domicilio en NYC, 24/7",
  description:
    "Masaje terapéutico, deportivo, reductivo, drenaje y relajación a domicilio en Nueva York. Disponible 24/7, $100 la hora, camilla profesional incluida. Más de 15 años de experiencia. Reserva por WhatsApp. | Professional home-service massage in NYC, 24/7, table included.",
  openGraph: {
    title: "Massage by Jhon — Masaje a domicilio en NYC, 24/7",
    description:
      "Masaje profesional a domicilio con camilla incluida. Disponible 24/7 — $100 la hora. Reserva por WhatsApp.",
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

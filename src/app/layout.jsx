import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Common/Header";
import Footer from "@/Components/Common/Footer";
import BackToTop from "@/Components/Common/BackToTop";
import { CartProvider } from "@/context/CartContext";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-barlow-condensed",
});

export const metadata = {
  metadataBase: new URL("https://terramore.com.ar"),
  title: {
    default: "Terramore | Acceso legal y acompañado al cannabis medicinal",
    template: "%s | Terramore",
  },
  description:
    "Terramore es la ONG argentina que te acompaña en el acceso legal al cannabis medicinal. Certificación médica, habilitación REPROCANN, aceites, flores y cremas analizadas en laboratorio propio.",
  keywords: [
    "cannabis medicinal",
    "aceite de cannabis medicinal",
    "REPROCANN",
    "ONG cannabis medicinal argentina",
    "flores de cannabis medicinal",
    "cremas medicinales",
    "laboratorio propio",
    "medicina cannábica",
  ],
  openGraph: {
    title: "Terramore | Acceso legal y acompañado al cannabis medicinal",
    description:
      "Acompañamiento médico y legal completo: aceites, flores, cremas y extractos analizados en laboratorio propio. Socios en Córdoba, Buenos Aires y Argentina.",
    url: "https://terramore.com.ar",
    siteName: "Terramore",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terramore | Acceso legal y acompañado al cannabis medicinal",
    description:
      "Acompañamiento médico y legal completo: aceite, flores y demás referencias analizadas en laboratorio propio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body
        id="top"
        className={`${barlowCondensed.className} min-h-full flex flex-col`}
      >
        <CartProvider>
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
          <BackToTop />
        </CartProvider>
      </body>
    </html>
  );
}
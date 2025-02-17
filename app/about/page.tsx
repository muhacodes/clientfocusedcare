import { Metadata } from "next";

// import { Inter } from "next/font/google";
import { Poppins, Roboto, Lato, Playfair_Display } from "next/font/google";
import { HomePage } from "../components/headersection";
import Footer from "../components/Footer";
import { HeroSection } from "./components/about-us-component";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-roboto",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Client Focused Care",
  description:
    "Client Focused Care is launching soon. We are committed to providing exceptional, client-focused care services. Stay tuned for updates!",
  openGraph: {
    title: "Coming Soon - Client Focused Care",
    description:
      "Client Focused Care is launching soon. We are committed to providing exceptional, client-focused care services. Stay tuned for updates!",
    url: "https://clientfocusedcare.co.uk",
    siteName: "Client Focused Care",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
export default function Home() {
  return (
    // <HomeSectionPage />

    <>
      <main
        className={`${poppins.variable} ${roboto.variable} ${lato.variable} ${playfair.variable}`}
      >
        <HomePage />
        <HeroSection />
        <Footer />
      </main>
    </>
  );
}

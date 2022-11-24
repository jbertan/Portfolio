import { Poppins } from "@next/font/google";
import "./global.css";
import LayoutComponent from "../components/Layout";
import Footer from "./components/footer";

import SessionProviderC from "../contexts/SessionProvider";
const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: any;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <SessionProviderC>
          <LayoutComponent />

          <section> {children}</section>
        </SessionProviderC>
        <footer className="mb-10 flex justify-center bg-primary">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

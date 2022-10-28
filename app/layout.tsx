import { Poppins } from "@next/font/google";
import "./global.css";
import LayoutComponent from "../components/Layout";
import Footer from "./components/footer";

const poppins = Poppins({
  weight: "500",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <LayoutComponent />
        <section>{children}</section>
        <footer className="mb-10 flex justify-center bg-primary">
          <Footer />
        </footer>
      </body>
    </html>
  );
}

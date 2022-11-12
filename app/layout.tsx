import { Poppins } from "@next/font/google";
import "./global.css";
import LayoutComponent from "../components/Layout";
import Footer from "./components/footer";
import { headers } from "next/headers";
import { getSession } from "../lib/session";
import SessionProvider from "../contexts/SessionProvider";
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
  const session = await getSession(headers().get("cookie") ?? "");
  return (
    <SessionProvider>
      <html lang="en" className={poppins.className}>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body>
          <LayoutComponent />
          <section>{children}</section>
          <footer className="mb-10 flex justify-center bg-primary">
            <Footer />
          </footer>
        </body>
      </html>
    </SessionProvider>
  );
}

import { Poppins } from "@next/font/google";
import "./global.css";
import LayoutComponent from "../components/layout";

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
      <head></head>

      {/*  <LayoutComponent /> */}
      <body>{children}</body>
    </html>
  );
}

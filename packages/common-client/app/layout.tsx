import "./globals.scss";

import { Lato } from "@next/font/google";
import PageHeader from "../components/PageHeader/PageHeader";
import PageFooter from "../components/PageFooter/PageFooter";

const lato = Lato({ weight: ["100", "300", "400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}

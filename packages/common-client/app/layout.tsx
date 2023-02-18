import "./globals.scss";

import { Lato } from "@next/font/google";
import PageHeader from "../components/PageHeader/PageHeader";
import PageFooter from "../components/PageFooter/PageFooter";
import Script from "next/script";

const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaScript = `
  <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());

  console.info("ga loaded", gtag)

  gtag('config', 'G-KFMMQJBWE5');
  </script>
`;
  return (
    <html lang="en" className={lato.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <div dangerouslySetInnerHTML={{ __html: gaScript }}></div>
        <PageHeader />
        {children}
        <PageFooter />
      </body>
    </html>
  );
}

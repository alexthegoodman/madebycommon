import * as React from "react";

import styles from "./Meta.module.scss";

import { MetaProps } from "./Meta.d";
import Script from "next/script";

const Meta: React.FC<MetaProps> = ({
  title = "",
  description = "",
  addt = <></>,
}) => {
  const gaScript = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      console.info("ga loaded", gtag)

      gtag('config', 'G-KFMMQJBWE5');
    `;

  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {addt}

      <script
        // async={true}
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KFMMQJBWE5"
      ></script>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KFMMQJBWE5"
        strategy="afterInteractive"
      /> */}
      <Script id="google-analytics" strategy="afterInteractive">
        {gaScript}
      </Script>
      {/* <script
        id="ga-script"
        src=""
        async
        dangerouslySetInnerHTML={{ __html: gaScript }}
      ></script> */}
    </>
  );
};

export default Meta;

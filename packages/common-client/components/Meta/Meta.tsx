import * as React from "react";

import styles from "./Meta.module.scss";

import { MetaProps } from "./Meta.d";
import Script from "next/script";

const Meta: React.FC<MetaProps> = ({
  title = "",
  description = "",
  addt = <></>,
}) => {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {addt}

      <script
        async={true}
        src="https://www.googletagmanager.com/gtag/js?id=G-KFMMQJBWE5"
      ></script>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KFMMQJBWE5"
        strategy="afterInteractive"
      /> */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KFMMQJBWE5');
        `}
      </Script>
    </>
  );
};

export default Meta;

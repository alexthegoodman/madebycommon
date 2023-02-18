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
    </>
  );
};

export default Meta;

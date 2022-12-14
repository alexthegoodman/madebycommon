"use client";

import * as React from "react";

import styles from "./Icon.module.scss";
import { ArrowSquareOut, ArrowCircleRight } from "phosphor-react";

import { IconProps } from "./Icon.d";

const Icon: React.FC<IconProps> = ({ name = "" }) => {
  switch (name) {
    case "ArrowSquareOut":
      return <ArrowSquareOut weight="thin" />;
      break;
    case "ArrowCircleRight":
      return <ArrowCircleRight weight="thin" />;
      break;
    default:
      return <></>;
      break;
  }
};

export default Icon;

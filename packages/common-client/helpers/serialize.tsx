import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";

export const serialize = (children: any) =>
  children.map((node: any, i) => {
    if (Text.isText(node)) {
      //   let text = (
      //     <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      //   );
      let text: any = node.text;

      // if (node.bold) {
      //   text = <strong key={i}>{text}</strong>;
      // }

      // if (node.code) {
      //   text = <code key={i}>{text}</code>;
      // }

      // if (node.italic) {
      //   text = <em key={i}>{text}</em>;
      // }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    // console.info("node", node?.value?.sizes?.largeThumbnail?.url);

    switch (node.type) {
      case "h1":
        return <h1 key={i}>{serialize(node.children)}</h1>;
      case "h2":
        return <h2 key={i}>{serialize(node.children)}</h2>;
      case "h3":
        return <h3 key={i}>{serialize(node.children)}</h3>;
      case "h4":
        return <h4 key={i}>{serialize(node.children)}</h4>;
      case "h5":
        return <h5 key={i}>{serialize(node.children)}</h5>;
      case "h6":
        return <h6 key={i}>{serialize(node.children)}</h6>;
      case "quote":
        return <blockquote key={i}>{serialize(node.children)}</blockquote>;
      case "ul":
        return <ul key={i}>{serialize(node.children)}</ul>;
      case "ol":
        return <ol key={i}>{serialize(node.children)}</ol>;
      case "li":
        return <li key={i}>{serialize(node.children)}</li>;
      case "link":
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        );
      case "upload":
        return <img src={node?.value?.sizes?.largeThumbnail?.url} />;

      default:
        return <p key={i}>{serialize(node.children)}</p>;
    }
  });

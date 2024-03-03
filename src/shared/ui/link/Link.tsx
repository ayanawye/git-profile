import React from "react";
import style from "./Link.module.scss";

interface Props {
  href: string;
  children: React.ReactNode;
  blank?: boolean;
}

function Link(props: Props) {
  const { href, children, blank } = props;

  return (
    <a href={href} target={blank ? "_blank" : ""}>
      {children}
    </a>
  );
}

export default Link;

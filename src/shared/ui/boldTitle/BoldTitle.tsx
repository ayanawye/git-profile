import React from "react";

interface Props {
  children: React.ReactNode;
}

function BoldTitle(props: Props) {
  const { children } = props;

  return <h3>{children}</h3>;
}

export default BoldTitle;

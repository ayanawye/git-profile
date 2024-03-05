import React from "react";
import style from "./AvatarImage.module.scss";

interface Props {
  src: string | undefined;
  alt: string;
}

function AvatarImage(props: Props) {
  const { src, alt } = props;

  return <img className={style.image} src={src} alt={alt} />;
}

export default AvatarImage;

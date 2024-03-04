import React from "react";
import style from "./Loader.module.scss";

interface Props {}

function Loader(props: Props) {
  const {} = props;

  return (
    <div className={style.wrapper}>
      <div className={style.loader}></div>
    </div>
  );
}

export default Loader;

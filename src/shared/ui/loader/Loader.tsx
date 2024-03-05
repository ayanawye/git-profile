import React from "react";
import style from "./Loader.module.scss";

function Loader() {
  return (
    <div className={style.wrapper}>
      <div className={style.loader}></div>
    </div>
  );
}

export default Loader;

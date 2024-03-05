import React from "react";
import style from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header className={style.nav}>
      <NavLink className={({isActive}) => isActive ? style.active : ''} to="profile">Profile</NavLink>
      <NavLink className={({isActive}) => isActive ? style.active : ''} to="repos">Repositories</NavLink> 
      <NavLink className={({isActive}) => isActive ? style.active : ''} to="search-users">Search Users</NavLink>
    </header>
  );
}

export default Navigation;

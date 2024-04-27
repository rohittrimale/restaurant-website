import React, { useState } from "react";
import classess from "./Header.module.css";
import mealsImg from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classess.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton  onClick={props.onShowCart}/>
      </header>

      <div className={classess["main-image"]}>
        <img src={mealsImg} alt="Table full of delicius food!" />
      </div>
    </>
  );
};

export default Header;

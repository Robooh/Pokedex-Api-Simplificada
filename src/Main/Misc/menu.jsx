import React from "react";
import "./menu.css";
import Pikachu from "./src/Pikachu.png";



const Main = () => {

  return (
    <main className="menu">
      <div className="text">
        <h1> Pokemons Shiny</h1>
        <img src={Pikachu} height={150} alt="logo-shiny"></img>
      </div>
    </main>
  );
};

export default Main;

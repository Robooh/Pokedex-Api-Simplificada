import "./header.css";
import React from "react";
import Photo from "./imagem/johto.png";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
const navigate = useNavigate()

  return (
    <div className="topnav">
      <a>
        <img src={Photo} alt="Pokemon johto" height={95} style={{cursor:"pointer"}} onClick={() => navigate("/")}></img>
      </a>
    </div>
  );
};

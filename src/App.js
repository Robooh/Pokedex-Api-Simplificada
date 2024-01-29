import React from "react";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./Main/Rotas/route.jsx";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <AppRoutes/>
    </div>
  );
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0
    box-sizigin: border-box;
    list-style: none;
  }
`;



export default App;



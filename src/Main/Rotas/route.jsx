import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../dados/api"
import Profile from "../newPage/Profile"



const AppRoutes = () => {
   
    
    return(
    <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/profile" element={<Profile/>}/>
            </Routes>
    </BrowserRouter>
    )
}

export { AppRoutes }












// pra amanha tem que trabalhar no filtro,a barra de pesquisa vai precisar do valor do tipo que vai ta no console.log
// testa o link routa pra cada cada cartão com o pokemon
// depois disso finaliza o style do cartão e (final do projeto)
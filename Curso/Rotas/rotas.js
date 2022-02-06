import React from "react";
import { 
    BrowserRouter as Router,  
    Routes, 
    Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Header from './Components/Header'

const Rotas = () =>{
    return(
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="/sobre" element={<Sobre/>}/>
            </Routes>
            <Routes>
                <Route path="/contato" element={<Contato/>}/>
            </Routes>
        </Router>
    )
}

export default Rotas;

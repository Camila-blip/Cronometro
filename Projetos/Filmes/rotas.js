import { 
    BrowserRouter as Router,  
    Routes, 
    Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';

const Rotas = () =>{
    return(
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
            </Routes>
        </Router>
    )
}

export default Rotas;
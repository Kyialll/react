
import './App.css';
import {useState,useEffect} from "react"

import {Routes, Route} from "react-router-dom";

import {MainPage} from "./pages/MainPage"
import {About} from "./pages/About"
import {PokemonInfo} from "./pages/PokemonInfo"
import {Link} from "react-router-dom";


const App=()=> {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }


    return (
        <div className={`app ${theme}`}>
            {/*<button onClick={toggleTheme}*/}
            {/*        className="button">*/}
            {/*    Change theme*/}
            {/*</button>*/}

            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/pokemon/:id'} element={<PokemonInfo/>}/>
            </Routes>

        </div>
    )
}


export default App;

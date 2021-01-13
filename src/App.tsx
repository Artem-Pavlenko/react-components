import React from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import './App.css'
import {MaterialButton} from "./Components/MaterialButton/MaterialButton";
import {BurgerMenu} from "./Components/BurgerMenu/BurgerMenu";

function App() {
    return (
        <div className="App">
            <div className="navBar">
                <ul>
                    <li><Link to={'/button'}>Material button</Link></li>
                    <li><Link to={'/burgerMenu'}>Burger menu</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path={'/button'} render={() => <MaterialButton/>}/>
                <Route path={'/burgerMenu'} render={() => <BurgerMenu/>}/>
            </Switch>
        </div>
    )
}

export default App

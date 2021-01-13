import React from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import './App.css'
import {MaterialButton} from "./Components/MaterialButton/MaterialButton";
import {BurgerMenu} from "./Components/BurgerMenu/BurgerMenu";
import {DragAndDrop} from "./Components/DragAndDrop/DragAndDrop";

function App() {
    return (
        <div className="App">
            <div className="navBar">
                <ul>
                    <li><Link to={'/button'}>Material button</Link></li>
                    <li><Link to={'/burgerMenu'}>Burger menu</Link></li>
                    <li><Link to={'/dragAndDrop'}>Drag and drop</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path={'/button'} render={() => <MaterialButton/>}/>
                <Route path={'/burgerMenu'} render={() => <BurgerMenu/>}/>
                <Route path={'/dragAndDrop'} render={() => <DragAndDrop/>}/>
            </Switch>
        </div>
    )
}

export default App

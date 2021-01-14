import React from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import './App.css'
import {MaterialButton} from "./Components/MaterialButton/MaterialButton";
import {BurgerMenu} from "./Components/BurgerMenu/BurgerMenu";
import {DragAndDrop} from "./Components/DragAndDrop/DragAndDrop";
import {DragAndDrop2} from "./Components/DragAndDrop2/DragAndDrop2";

function App() {
    return (
        <div className="App">
            <div className="navBar">
                <ul>
                    <li><Link to={'/button'}>Material button</Link></li>
                    <li><Link to={'/burgerMenu'}>Burger menu</Link></li>
                    <li><Link to={'/dragAndDrop'}>Drag and drop</Link></li>
                    <li><Link to={'/dragAndDrop2'}>Drag and drop 2</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path={'/button'} render={() => <MaterialButton/>}/>
                <Route path={'/burgerMenu'} render={() => <BurgerMenu/>}/>
                <Route path={'/dragAndDrop'} render={() => <DragAndDrop/>}/>
                <Route path={'/dragAndDrop2'} render={() => <DragAndDrop2/>}/>
            </Switch>
        </div>
    )
}

export default App

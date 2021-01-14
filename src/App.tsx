import React from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import './App.css'
import {MaterialButton} from "./Components/MaterialButton/MaterialButton";
import {BurgerMenu} from "./Components/BurgerMenu/BurgerMenu";
import {DragAndDrop_List} from "./Components/Drag And Drop/DragAndDrop_List/DragAndDrop_List";
import {DragAndDrop2} from "./Components/Drag And Drop/DragAndDrop2/DragAndDrop2";
import {DragAndDrop_trello} from "./Components/Drag And Drop/DragAndDrop_ difficult_version/DragAndDrop_trello";

function App() {

    return (
        <div className="App">
            <div className="navBar">
                <ul>
                    <li><Link to={'/button'}>Material button</Link></li>
                    <li><Link to={'/burgerMenu'}>Burger menu</Link></li>
                    <li><Link to={'/dragAndDrop'}>Drag and drop</Link></li>
                    <li><Link to={'/dragAndDrop2'}>Drag and drop 2</Link></li>
                    <li><Link to={'/dragAndDrop-difficult_version'}>Drag and drop(difficult version)</Link></li>
                </ul>
            </div>
            <Switch>
                <Route path={'/button'} render={() => <MaterialButton/>}/>
                <Route path={'/burgerMenu'} render={() => <BurgerMenu/>}/>
                <Route path={'/dragAndDrop'} render={() => <DragAndDrop_List/>}/>
                <Route path={'/dragAndDrop2'} render={() => <DragAndDrop2/>}/>
                <Route path={'/dragAndDrop-difficult_version'} render={() => <DragAndDrop_trello/>}/>
            </Switch>
        </div>
    )
}

export default App

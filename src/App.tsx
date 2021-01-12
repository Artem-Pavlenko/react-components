import React from 'react'
import {Link, Route, Switch} from 'react-router-dom';
import './App.css'
import {MaterialButton} from "./Components/MaterialButton/MaterialButton";

function App() {
    return (
        <div className="App">
            <ul>
                <li><Link to={'/button'}>Material button</Link></li>
            </ul>
            <Switch>
                <Route path={'/button'} render={() => <MaterialButton/>}/>
            </Switch>
        </div>
    )
}

export default App

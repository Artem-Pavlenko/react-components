import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import AppRouter from "./routes/AppRouter";

function App() {

    return (
        <div className="App">
            <div className="navBar">
                <div>
                    <h2>React-components</h2>
                    <ul>
                        <li><Link to={'/button'}>Material button</Link></li>
                        <li><Link to={'/burgerMenu'}>Burger menu</Link></li>
                        <li><Link to={'/dragAndDrop'}>Drag and drop</Link></li>
                        <li><Link to={'/dragAndDrop2'}>Drag and drop 2</Link></li>
                        <li><Link to={'/dragAndDrop-difficult_version'}>Drag and drop(difficult version)</Link></li>
                        <li><Link to={'/dragAndDrop-upload_file'}>Drag and drop(upload file)</Link></li>
                        <li><Link to={'/plantValidation'}>Plant validation</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>Animation on react</h2>
                    <ul>
                        <li><Link to={'/rtg'}>React Transition Group</Link></li>
                    </ul>
                </div>
            </div>
            <AppRouter/>
        </div>
    )
}

export default App

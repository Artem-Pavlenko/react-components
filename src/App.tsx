import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import AppRouter from './routes/AppRouter'

type LinkType = {
    path: string
    description: string
}

function App() {

    const links: LinkType[] = [
        {path: '/button', description: 'Material button'},
        {path: '/burgerMenuButton', description: 'Burger menu(button)'},
        {path: '/burgerMenu', description: 'Burger menu'},
        {path: '/dragAndDrop', description: 'Drag and Drop'},
        {path: '/dragAndDrop2', description: 'Drag and Drop 2'},
        {path: '/dragAndDrop-difficult_version', description: 'Drag and drop(difficult version)'},
        {path: '/dragAndDrop-upload_file', description: 'Drag and drop(upload file)'},
        {path: '/plantValidation', description: 'Plant validation'},
        {path: '/modal', description: 'Modal'},
        {path: '/checkbox', description: 'Checkbox'},
        {path: '/beforeAfter', description: 'Before/After effect'}
    ]
    const animationLinks: LinkType[] = [
        {path: '/rtg', description: 'Preloader (Transition)'},
        {path: '/rtgCSSTransition', description: 'Preloader (CSSTransition)'},
        {path: '/typingEffect', description: 'Typing effect'},
    ]

    return (
        <div className="App">
            <div className="navBar">
                <AppRouter/>

                <div className="navBlock">
                    <div>
                        <h2>React-components</h2>
                        <ul>
                            {links.map(l => <li><Link to={l.path}>{l.description}</Link></li>)}
                        </ul>
                    </div>
                    <div>
                        <h2>Animation's</h2>
                        <ul>
                            {animationLinks.map(l => <li><Link to={l.path}>{l.description}</Link></li>)}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App
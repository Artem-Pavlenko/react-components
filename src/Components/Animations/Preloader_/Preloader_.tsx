import React, {useEffect, useState} from 'react'
import { Transition } from 'react-transition-group'
import './Circle.css'
import s from './Preloader_.module.css'
import {MaterialButton} from "../../MaterialButton/MaterialButton"

const Preloader_ = () => {

    const [showHideLoader, setShowHideLoader] = useState<boolean>(false)

    const showHandler = () => {
        setShowHideLoader(prevState => !prevState)
    }

    useEffect( () => {
        setTimeout( () => setShowHideLoader(true), 1000)
        setTimeout( () => setShowHideLoader(false), 5000)
    }, [])

    return (
        <div className={s.mainBlock}>
            <MaterialButton onClick={showHandler}>{showHideLoader ? 'hide' : 'show'}</MaterialButton>
             <div className={s.wrapper}>

                 <Transition
                     in={showHideLoader}
                     timeout={500}
                     mountOnEnter
                     unmountOnExit
                 >
                     {state => <div className={`circle ${state}`}/>}
                 </Transition>

            </div>
        </div>
    )
}

export default Preloader_
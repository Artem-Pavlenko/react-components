import React, {useState} from 'react'
import './Preloader_CSSTransition.css'
import s from "../Preloader_transition/Preloader_.module.css"
import {MaterialButton} from "../../../MaterialButton/MaterialButton"
import {CSSTransition} from "react-transition-group"


const PreloaderCssTransition = () => {
    const [showHideLoader, setShowHideLoader] = useState<boolean>(false)

    const showHandler = () => {
        setShowHideLoader(prevState => !prevState)
    }



    return (
        <div className={s.mainBlock}>
            <MaterialButton onClick={showHandler}>{showHideLoader ? 'hide' : 'show'}</MaterialButton>
            <div className={s.wrapper}>
                <CSSTransition
                    in={showHideLoader}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enterActive: 'circle-show',
                        enterDone: 'circle-rotate',
                        exitActive: 'circle-hide'
                    }}
                >
                    <div className={`circle`}/>
                </CSSTransition>

            </div>
        </div>
    )
}

export default PreloaderCssTransition
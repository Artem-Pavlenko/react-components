import React, {useRef, useState} from "react"
import s from "./BurgerMenu.module.css"


export const BurgerMenu = () => {

    const [burger, setBurger] = useState<boolean>(false)

    const click = () => {
        burger && setBurger(false)
        !burger && setBurger(true)
    }

    return (
        <div className={s.menBlock}>
            <div onClick={click} className={`${burger ? s.burgerActive : s.burger}`}/>
        </div>
    )
}
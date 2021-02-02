import React, {useState} from "react"
import s from "./BurgerMenuButton.module.css"


export const BurgerMenuButton = () => {

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
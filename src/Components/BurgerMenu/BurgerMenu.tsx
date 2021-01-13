import React, {useRef, useState} from "react"
import s from "./BurgerMenu.module.css"


// import menuIcon from "../../assets/icon/menu.svg"
// import closeIcon from "../../assets/icon/close.svg"

export const BurgerMenu = () => {

    const [burger, setBurger] = useState<boolean>(false)

    const click = () => {
        if (burger) {
            setBurger(false)
        } else if (!burger) {
            setBurger(true)
        }
    }

    return (
        <div className={s.menBlock}>
            <div onClick={click} className={`${burger ? s.burgerActive : s.burger}`}/>
        </div>
    )
}
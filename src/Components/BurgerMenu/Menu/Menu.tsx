import React, {Dispatch, SetStateAction} from 'react'
import {Link} from 'react-router-dom'
import s from './Menu.module.css'
import {Item} from '../BurgerMenu'


export type MenuType = {
    header: any
    items: Array<Item>
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}

const Menu: React.FC<MenuType> = ({header, items, active, setActive}) => {

    return (
        <div className={active ? `${s.menu} ${s.active}` : s.menu} onClick={() => setActive(false)}>
            <div className={s.blur}/>
            <div className={active ? `${s.menuContent} ${s.active}` : s.menuContent} onClick={e => e.stopPropagation()}>
                <div className={s.menuHeader}>
                    {header}
                </div>
                <ul>
                    {items.map((item) =>
                        <li>
                            <Link to={item.href}>{item.text}</Link>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Menu
import React from 'react'
import s from './Checkbox.module.css'

const Checkbox = () => {
    return (
        <div className={s.checkboxBlock}>
            <input type="checkbox" id={'check'}/>
            <label htmlFor={'check'}></label>
        </div>
    )
}

export default Checkbox
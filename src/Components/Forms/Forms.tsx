import React, {useState} from 'react'
import InputCustom from "./Input/InputCustom"
import s from './Forms.module.css'

const Forms = () => {

    const [value, setValue] = useState('')

    return (
        <div className={s.formsBlock}>
            <InputCustom type={'text'} value={value} setValue={setValue} label={'example'}/>
        </div>
    )
}

export default Forms
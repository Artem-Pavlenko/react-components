import React from 'react'
import s from './Input.module.css'


type Input = {
    type: string
    value: string
    setValue: (value: string) => void
    autoComplete?: 'off' | 'on'
    label: string
}

const InputCustom: React.FC<Input> = ({value, type, setValue, autoComplete = 'off', label}) => {
    return (
        <div className={s.inputBlock}>
            <input
                id={'id'}
                type={type}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                autoComplete={autoComplete}
            />
            <label htmlFor={'id'}>
                <span>{label[0].toUpperCase() + label.slice(1)}</span>
            </label>
        </div>
    )
}

export default InputCustom
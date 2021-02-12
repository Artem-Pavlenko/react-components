import React, {ChangeEvent, useState} from 'react'
import s from './Range.module.css'
import f1 from '../../assets/range/1.jpg'
import f2 from '../../assets/range/2.jpg'
import f3 from '../../assets/range/3.jpg'
import f4 from '../../assets/range/4.jpg'
import f5 from '../../assets/range/5.jpg'
import f6 from '../../assets/range/6.jpg'
import f7 from '../../assets/range/7.jpg'
import f8 from '../../assets/range/8.jpg'
import f9 from '../../assets/range/9.jpg'
import f10 from '../../assets/range/10.jpg'
import f11 from '../../assets/range/11.jpg'
import f12 from '../../assets/range/12.jpg'
import f13 from '../../assets/range/13.jpg'

const Range = () => {

    const photos = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13]

    const [value, setValue] = useState(0)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }

    return (
        <div className={s.rangeBlock}>
            <img src={photos[value]} alt=""/>
            <input type="range" value={value} onChange={changeHandler} max={photos.length - 1}/>
        </div>
    )
}

export default Range
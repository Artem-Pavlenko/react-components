import React from 'react'
import s from './BeforeAfter.module.css'

const BeforeAfter = () => {
    return (
        <div className={s.beforeAfterBlock}>
            <div className={s.slider}>
                <div className={s.sliderBefore}>
                    <div className={s.sliderResize}></div>
                </div>
                <div className={s.sliderAfter}></div>
            </div>
        </div>
    )
}

export default BeforeAfter
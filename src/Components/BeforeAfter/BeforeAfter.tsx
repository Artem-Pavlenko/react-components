import React, {useState, MouseEvent} from 'react'
import s from './BeforeAfter.module.css'

const BeforeAfter = () => {

    const [width, setWidth] = useState(512)
    const [trigger, setTrigger] = useState(false)
    const [currentClientX, setCurrentClientX] = useState(512)

    const mouseDownHandler = (e: MouseEvent<HTMLDivElement>) => {
        setCurrentClientX(e.clientX)
        setTrigger(true)
    }

    const mouseUpHandler = () => {
        setTrigger(false)
    }

    const moveHandler = (e: MouseEvent<HTMLDivElement>) => {
        if (trigger) {
            setWidth(prevState => prevState - (currentClientX - e.clientX))
            setCurrentClientX(e.clientX)
        }
    }

    return (
        <div className={s.beforeAfterBlock}>
            <div className={s.slider} onMouseMove={moveHandler}>
                <div className={s.sliderBefore} style={{width: `${width}px`}}>
                    <div className={s.sliderResize} datatype={'resize'} onMouseDown={mouseDownHandler}
                         onMouseUp={mouseUpHandler}/>
                </div>
                <div className={s.sliderAfter}/>
            </div>
        </div>
    )
}

export default BeforeAfter
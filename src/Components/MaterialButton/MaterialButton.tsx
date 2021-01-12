import React, {useRef, useState, MouseEvent} from "react"
import s from "./MaterialButton.module.css"

// https://www.youtube.com/watch?v=UvpegI4YI4Q&ab_channel=SteptoWeb

export const MaterialButton = () => {

    const button = useRef<HTMLButtonElement>(null)
    const container = useRef<HTMLSpanElement>(null)

    const [show, setShow] = useState(false)
    const [positionX, setPositionX] = useState<number>(0)
    const [positionY, setPositionY] = useState<number>(0)

    const createCircleItem = (posX: number, posY: number) => {
        // const circle = <div className={s.circle} style={{left: `${posX}px`, top: `${posY}px`}}/>
        // container && container.current && container.current.appendChild(circle)
        setShow(true)
        setPositionX(posX)
        setPositionY(posY)
    }

    const removeCircleItem = () => {
        setShow(false)
    }

    const click = (event: MouseEvent<HTMLButtonElement> | MouseEvent) => {
        const offset = container && container.current && container.current.getBoundingClientRect()
        if (container.current) {
            // @ts-ignore
            createCircleItem(event.pageX - offset.left, event.pageY - offset.top)
            setTimeout( () => setShow(false), 1000)
        }
    }

    return (
        <div className={s.buttonBlock}>
            <button onMouseDown={click} className={s.btn} ref={button}>
                <span className={s.spanContainer} ref={container}>
                    {show && <div style={{left: `${positionX}px`, top: `${positionY}px`}} className={s.circle}/>}
                </span>
                <span className={s.btnText}>Click!</span>
            </button>
        </div>
    )
}
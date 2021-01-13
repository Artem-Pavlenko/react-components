import React, {useRef, useState} from "react"
import s from "./DragAndDrop.module.css"

export const DragAndDrop = () => {
    const [dragTrigger, setDragTrigger] = useState(false)

    const card = useRef<HTMLDivElement>(null)
    const calls = useRef<HTMLLIElement>(null)


    const dragStart = () => {
        // задаем setTimeout чтобы засетать тригер асинхронно после перетаскивания и применения стиля s.hide, котрый {display: none;}
        setTimeout(() => setDragTrigger(true))
    }
    const dragEnd = () => {
        setDragTrigger(false)
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.wrapper}>
                <ul className={s.list}>
                    <li className={s.listCaption}>Plant</li>
                    <li className={s.listCaption}>In progress</li>
                    <li className={s.listCaption}>Review</li>
                    <li className={s.listCaption}>Production</li>

                    <li className={s.listCell} ref={calls}>
                        <div
                            className={`${s.listCard} ${dragTrigger ? s.hide : ''}`}
                            draggable={true}
                            ref={card}
                            onDragStart={dragStart}
                            onDragEnd={dragEnd}
                        >
                            <div className={s.listTitle}>
                                task title
                            </div>
                            <div className={s.listCardDescription}>
                                card info
                            </div>
                        </div>
                    </li>
                    <li className={s.listCard} ref={calls}></li>
                    <li className={s.listCard} ref={calls}></li>
                    <li className={s.listCard} ref={calls}></li>
                </ul>
            </div>
        </div>
    )
}
import React, {useState, DragEvent, useRef} from "react"
import s from "./DragAndDrop.module.css"
import cn from "classnames"

// https://www.youtube.com/watch?v=-9qu_Z0D84g&list=PL5_s7xdj2Vsw6DygVrvYlWF_keNESfnC0&ab_channel=SteptoWeb

export const DragAndDrop_List = () => {

    const [dragTrigger, setDragTrigger] = useState(false)
    const [onDragEnter, setOnDragEnter] = useState(false)

    const divRef = useRef<HTMLDivElement>(null)
    const liRef = useRef<HTMLLIElement>(null)


    const dragStart = () => {
        // задаем setTimeout чтобы засетать тригер асинхронно после перетаскивания и применения стиля s.hide, котрый {display: none;}
        setTimeout(() => setDragTrigger(true), 0)
    }
    const dragEnd = () => {
        setDragTrigger(false)
    }
    const dragOver = (event: DragEvent<HTMLLIElement>) => {
        // для того чтобы сработала функция dragDrop
        event.preventDefault()
    }
    const dragEnter = () => {
        // при наведении
        setOnDragEnter(true)
    }
    const dragLeave = () => {
        // при покидании
        setOnDragEnter(false)
    }
    const dragDrop = () => {
        liRef && liRef.current && liRef.current.append()
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.wrapper}>
                <ul className={s.list}>
                    <li className={s.listCaption}>Plant</li>
                    <li className={s.listCaption}>In progress</li>
                    <li className={s.listCaption}>Review</li>
                    <li className={s.listCaption}>Production</li>

                    <li
                        className={cn(s.listCell, {[s.hovered]: onDragEnter})}
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={dragDrop}
                    >
                        <div
                            ref={divRef}
                            className={cn(s.listCard, {[s.hide]: dragTrigger})}
                            draggable={true}
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
                    <li
                        ref={liRef}
                        className={cn(s.listCell, {[s.hovered]: onDragEnter})}
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={dragDrop}></li>
                    <li
                        className={cn(s.listCell, {[s.hovered]: onDragEnter})}
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={dragDrop}></li>
                    <li
                        className={cn(s.listCell, {[s.hovered]: onDragEnter})}
                        onDragOver={dragOver}
                        onDragEnter={dragEnter}
                        onDragLeave={dragLeave}
                        onDrop={dragDrop}></li>

                </ul>
            </div>
        </div>
    )
}

type LiDragAndDropType = {
    hoveredTrigger?: boolean
    dragOver?: () => void
    dragEnter?: () => void
    dragLeave?: () => void
    dragDrop?: (child: any) => void
    text?: string
    children?: React.ReactNode
    dropItem?: any
}

// const Li = (props: LiDragAndDropType) => {
//
//     const liRef = useRef<HTMLLIElement>(null)
//
//     const [onDragEnter, setOnDragEnter] = useState(false)
//
//     const dragOver = (event: DragEvent<HTMLLIElement>) => {
//         // для того чтобы сработала функция dragDrop
//         event.preventDefault()
//     }
//     const dragEnter = () => {
//         // при наведении
//         setOnDragEnter(true)
//     }
//     const dragLeave = () => {
//         // при покидании
//         setOnDragEnter(false)
//     }
//     const dragDrop = () => {
//
//         liRef && liRef.current && liRef.current.append(props.dropItem)
//     }
//
//
//     return (
//         <li
//             ref={liRef}
//             className={cn(s.listCell, {[s.hovered]: onDragEnter})}
//             onDragOver={dragOver}
//             onDragEnter={dragEnter}
//             onDragLeave={dragLeave}
//             onDrop={dragDrop}
//         >{props.text || props.children} </li>
//     )
// }
import React, {useState, DragEvent} from "react"
import s from "./DragAndDrop_trello.module.css"

type TaskType = {
    id: number
    title: string
}
type BoardType = {
    id: number
    title: string
    tasks: TaskType[]
}

export const DragAndDrop_trello = () => {

    const [boards, setBoards] = useState<BoardType[]>([
        {id: 1, title: "Todo", tasks: [{id: 1, title: "Go to a shop"}, {id: 2, title: "throw out the trash"}]},
        {id: 2, title: "Verify", tasks: [{id: 3, title: "Code review"}, {id: 4, title: "task to factorial"}]},
        {id: 3, title: "Done", tasks: [{id: 5, title: "Film a video"}, {id: 6, title: "mount a video"}]},
    ])

    const [currentBoard, setCurrentBoard] = useState<BoardType | null>(null)
    const [currentTask, setCurrentTusk] = useState<TaskType | null>(null)


    function dragStartHandler(e: DragEvent<HTMLDivElement>, task: TaskType, board: BoardType) {
        e.currentTarget.style.opacity = '.3'
        setCurrentBoard(board)
        setCurrentTusk(task)
    }

    function dragOverHandler(e: DragEvent<HTMLDivElement>) {
        e.preventDefault()
        if ( e.currentTarget.className === s.task) {
            e.currentTarget.className = `${s.task} ${s.hoveredItem}`
        }
    }

    function dragEndHandler(e: DragEvent<HTMLDivElement>) {
        e.currentTarget.className = s.task
        e.currentTarget.style.opacity = '1'
    }

    function dragLeaveHandler(e: DragEvent<HTMLDivElement>) {
        e.currentTarget.className = s.task

    }

    function dropHandler(e: DragEvent<HTMLDivElement>, task: TaskType, board: BoardType) {
        e.preventDefault()

        const currentIndex = currentBoard?.tasks.indexOf(currentTask as TaskType)
        // удаляем по индексу 1 элемент
        currentBoard?.tasks.splice(currentIndex as number, 1)
        const dropIndex = board.tasks.indexOf(task)
        // к текущей доске добавляем (дропнутую таску) currentTask (так как в .splice вторым параметром узазали 0)
        board.tasks.splice(dropIndex + 1, 0, currentTask as TaskType)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            } else if (b.id === currentBoard?.id) {
                return currentBoard
            }
            return b
        }))
    }

    function dropCardHandler(e: React.DragEvent<HTMLDivElement>, board: BoardType) {
        // // проверка для TS
        // if (currentTask) {
        //     board.tasks.push(currentTask)
        // }
        // const currentIndex = currentBoard?.tasks.indexOf(currentTask as TaskType)
        // // удаляем по индексу 1 элемент
        // currentBoard?.tasks.splice(currentIndex as number, 1)
        //
        // setBoards(boards.map(b => {
        //     if (b.id === board.id) {
        //         return board
        //     } else if (b.id === currentBoard?.id) {
        //         return currentBoard
        //     }
        //     return b
        // }))
    }

    return (
        <div className={s.mainBlock}>
            {boards.map(board =>
                <div
                    key={board.id}
                    className={s.board}
                    onDragOver={dragOverHandler}
                    onDrop={e => dropCardHandler(e, board)}
                >
                    <div className={s.boarTitle}>{board.title}</div>
                    {board.tasks.map(item =>
                        <div
                            key={item.id}
                            className={s.task}
                            draggable={true}
                            onDragStart={(e) => dragStartHandler(e, item, board)}
                            onDragOver={dragOverHandler}
                            onDragLeave={dragLeaveHandler}
                            onDragEnd={dragEndHandler}
                            onDrop={(e) => dropHandler(e, item, board)}

                        >
                            {item.title}</div>)}
                </div>)}
        </div>
    )
}
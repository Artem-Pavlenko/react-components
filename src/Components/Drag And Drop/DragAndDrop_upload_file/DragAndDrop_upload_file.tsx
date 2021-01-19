import React, {useState, DragEvent} from 'react'
import s from './DragAbdDrop_upload_file.module.css'

export const DragAndDrop_upload_file = () => {

    const [drag, setDrag] = useState<boolean>(false)

    // function dragOverHandler(e: DragEvent<HTMLDivElement>) {
    //     e.preventDefault()
    //     setDrag(true)
    // }

    function dragStartHandler(e: DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e: DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setDrag(false)
    }

    function dropHandler(e: DragEvent<HTMLDivElement>) {
        e.preventDefault()
        let files = e.dataTransfer.files
        // FileList type
        console.log('files : ',files)
        const formData = new FormData().append('file', files[0])
        setDrag(false)
        console.log('formData : ', formData)
    }

    return (
        <div className={s.mainBlock}>
            {drag
                ? <div
                    className={s.dropArea}
                    onDragStart={dragStartHandler}
                    onDragOver={dragStartHandler}
                    onDragLeave={dragLeaveHandler}
                    onDrop={dropHandler}
                >
                    Отпустите файл, чтобы загрузить их
                </div>
                : <div
                    className={s.dropAreaWithAutFile}
                    onDragStart={dragStartHandler}
                    onDragOver={dragStartHandler}
                    onDragLeave={dragLeaveHandler}
                >
                    Перетащите файл, чтобы загрузить их
                </div>
            }
        </div>
    )
}
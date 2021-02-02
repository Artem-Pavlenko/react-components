import React, {Dispatch, SetStateAction} from 'react'
import s from './Modal.module.css'

type ModalType = {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<ModalType> = ({active, setActive, children}) => {

    return (
        <div className={active ? `${s.modal} ${s.active}` : s.modal} onClick={() => setActive(false)}>
            <div className={active ? `${s.modalContent} ${s.active}` : s.modalContent}
                 onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal
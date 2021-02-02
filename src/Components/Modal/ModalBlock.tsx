import React, {useState} from 'react'
import s from './Modal.module.css'
import Modal from './Modal'

export const ModalBlock = () => {

    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <div className={s.modalBlock}>
            <button onClick={() => setShowModal(prev => !prev)}>{showModal ? 'Hide' : 'Show'}</button>
            <Modal active={showModal} setActive={setShowModal}>Modal window!</Modal>
        </div>
    )
}

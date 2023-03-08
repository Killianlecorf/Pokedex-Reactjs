import React from 'react';
import { CgClose } from "react-icons/cg";

const Modal = ({setModalOpen, modalOpen, name}) => {

    const handleCloseModal = () => {
        setModalOpen({...modalOpen, isOpen: false})
    }

    return (
        <div onClick={handleCloseModal} className='modal-wrapper'>
            <div className="image-modal-content">
                
            </div>
            <div className="modal">
                <div className="close-area">
                    <div className='close-cross-content'>
                        <CgClose onClick={handleCloseModal} className='close-cross' />
                    </div>
                </div>
                <div className='title-content'>
                    <h2>
                        {name}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Modal; 

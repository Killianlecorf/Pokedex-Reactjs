import React from 'react';
import { CgClose } from "react-icons/cg";

const Modal = ({setIsModalOpen, name}) => {

    const handleCloseModal = () => {
        setIsModalOpen(false)
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

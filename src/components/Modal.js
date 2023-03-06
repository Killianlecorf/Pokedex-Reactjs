import React from 'react';
import { CgClose } from "react-icons/cg";

const Modal = () => {

    const handleCloseModa = () => {
        
    }

    return (
        <div className='modal-wrapper'>
            <div className="modal">
                <div className="close-area">
                        <div>
                            <CgClose className='close-cross' />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

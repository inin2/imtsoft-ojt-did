import React from "react";
import './Modal.scss'

function Modal({isFinish, setIsFinish, isInput, setIsInput, modalTitle, modalContent}) {
    return (
        // <div className={`modal_wrap ${isFinish||isInput ? "on" : ""}`} onClick={() => {setIsFinish(false)}}>
        <div className={`modal_wrap ${isFinish||isInput ? "on" : ""}`} onClick={() => `${isFinish ? setIsFinish(false) : null}`}>
            <div className="modal">
                <p className="modalTitle" onClick={() => `${isInput ? setIsInput(false) : null}`}>{modalTitle}</p>
                <div className="modalContent">{modalContent}</div>
            </div>
        </div>
    );
}

export default Modal;
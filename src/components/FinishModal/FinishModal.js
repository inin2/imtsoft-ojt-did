import React from "react";
import './FinishModal.scss'
import Modal from "../Modal/Modal";

function FinishModal({finishNum, isFinish, setIsFinish}) {
    function numFormat(number) {
        const numStr = number.toString();
        if(numStr.length === 1) {
            return '00' + numStr;
        } else if(numStr.length === 2) {
            return '0' + numStr;
        } else {
            return numStr;
        }
    }

    return (
        <Modal isFinish={isFinish} setIsFinish={setIsFinish} modalTitle="카운터에서 제품을 받으세요." 
            modalContent={
                <span className="finishNum">{numFormat(finishNum)}</span>
            }
        />
    );
}

export default FinishModal;
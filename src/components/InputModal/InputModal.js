import React, { useEffect, useState } from "react";
import './InputModal.scss'
import Modal from "../Modal/Modal"; 

function InputModal({isInput, setIsInput, orderNum, setOrderNum}) {
    const [newOrderNum, setNewOrderNum] = useState(orderNum);
    useEffect(()=>{
        setNewOrderNum(orderNum);
    }, [orderNum]);

    return (
        <Modal isInput={isInput} setIsInput={setIsInput} modalTitle="주문번호 설정" 
            modalContent={
                <form className="startNumForm" onSubmit={(e) => {
                    e.preventDefault();
                    setOrderNum(newOrderNum);
                    alert("주문번호가 변경되었습니다.");
                }}>
                    <input type="number" value={newOrderNum} onChange={ event => { 
                        setNewOrderNum(Number(event.target.value)); } } min="1" max="9999" />
                    <button>입력</button>
                </form>
            }
        />
    );
}

export default InputModal;
import React from "react";
import './StateTitle.scss'

function StateTitle({text, state, onNewOrder}) {
    return (
        <div className={`stateTitle ${state === "finish" ? "finsih" : ""}`}>
            <span onClick={onNewOrder}>{text}</span>
        </div>
    );
}

export default StateTitle;
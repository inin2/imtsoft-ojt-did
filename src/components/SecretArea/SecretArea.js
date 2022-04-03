import React from "react";
import './SecretArea.scss'

function SecretArea({ClickCountCheck, className}) {
    return (
        <div className={`secretArea ${className}`} onClick={ClickCountCheck}></div>
    );
}

export default SecretArea;
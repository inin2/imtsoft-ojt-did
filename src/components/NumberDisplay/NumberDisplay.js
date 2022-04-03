import React from "react";
import './NumberDisplay.scss';

function NumberDisplay({num, onNextLevel, onPrevLevel}) {
    
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
        <div className="numberDisplay" onClick={onNextLevel} onContextMenu={onPrevLevel}>
            <span>{numFormat(num)}</span>
        </div>
    );
}

export default NumberDisplay;
import React from "react";
import './StateBody.scss'

function StateBody({contents, state, number}) {
    return (
        <div className="stateBody">
            <div className="contents">
                <span>{contents}</span>
            </div>
            <div className={`number_wrap ${state === "finish" ? "finish" : ""}`}>
                {number}
            </div>
        </div>
    );
}

export default StateBody;
import React from "react";
import './StateComponent.scss'
import StateTitle from "../StateTitle/StateTitle";
import StateBody from "../StateBody/StateBody";

function StateComponent({text, contents, state, number, onNewOrder}) {
    return (
        <div className="stateComponent">
            <StateTitle text={text} state={state} onNewOrder={onNewOrder}/>
            <StateBody contents={contents} state={state} number={number}/>
        </div>
    );
}

export default StateComponent;
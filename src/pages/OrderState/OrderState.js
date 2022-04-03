import React, { useState, useEffect } from "react";
import './OrderState.scss'
import StateComponent from "../../components/StateComponent/StateComponent";
import NumberDisplay from "../../components/NumberDisplay/NumberDisplay";
import FinishModal from "../../components/FinishModal/FinishModal";
import InputModal from "../../components/InputModal/InputModal";
import SecretArea from "../../components/SecretArea/SecretArea";

function OrderState() {

    // 주문번호
    const [orderNum, setOrderNum] = useState(1);

    // 주문번호 리스트
    const [numberList, setNumberList] = useState({
        level1 : [],
        level2 : [],
        level3 : []
    });

    const [finishNum, setFinishNum] = useState(0);
    const [isFinish, setIsFinish] = useState(false);
    useEffect(()=>{
        if(isFinish === true) {
            setTimeout(()=>{ setIsFinish(false) }, 2000);
        }
    }, [isFinish]);

    const [isInput, setIsInput] = useState(false);

    const componentArr = [
        { 
            text: "주문접수", 
            contents: "주문이 확인되었습니다.",
            number: (
                <>
                    {numberList.level1.map((v, index) => (<NumberDisplay key={index} num={numberList.level1[index]} 
                        onNextLevel = {() => {
                            let nList = {...numberList};
                            nList.level2.push(numberList.level1[index]);
                            for(let i = 0; i < nList.level1.length; i++) {
                                if(nList.level1[i] === numberList.level1[index])  {
                                    nList.level1.splice(i, 1);
                                }
                            }
                            setNumberList(nList);
                        }}
                        onPrevLevel = {(e) => {
                            e.preventDefault();
                            let nList = {...numberList};
                            for(let i = 0; i < nList.level1.length; i++) {
                                if(nList.level1[i] === numberList.level1[index])  {
                                    nList.level1.splice(i, 1);
                                }
                            }
                            setNumberList(nList);
                        }}
                    />))}
                </>
            ),
            onNewOrder: () => {
                let nList = {...numberList};
                nList.level1.push(orderNum);

                if(orderNum === 9999) {
                    setOrderNum(1);
                } else {
                    setOrderNum(orderNum + 1);
                    console.log("__orderNum : " + orderNum);
                }

                setNumberList(nList);
            }
        },
        { 
            text: "제조중", 
            contents: "제품을 준비중 입니다." ,
            number: (
                <>
                    {numberList.level2.map((v, index) => (<NumberDisplay key={index} num={numberList.level2[index]} 
                        onNextLevel = {() => {
                            let nList = {...numberList};
                            let fNum = {...finishNum};

                            fNum = numberList.level2[index]
                            setFinishNum(fNum);
                            setIsFinish(true);

                            nList.level3.unshift(numberList.level2[index]);
                            for(let i = 0; i < nList.level2.length; i++) {
                                if(nList.level2[i] === numberList.level2[index])  {
                                    nList.level2.splice(i, 1);
                                }
                            }
                            setNumberList(nList);
                        }}
                        onPrevLevel = {(e) => {
                            e.preventDefault();
                            let nList = {...numberList};
                            nList.level1.push(numberList.level2[index]);
                            for(let i = 0; i < nList.level2.length; i++) {
                                if(nList.level2[i] === numberList.level2[index])  {
                                    nList.level2.splice(i, 1);
                                }
                            }
                            setNumberList(nList);
                        }}
                    />))}
                </>
            )
        },
        { 
            text: "준비완료", 
            contents: "주문하신 제품이 준비되었습니다.", 
            number: (
                <>
                    {numberList.level3.map((v, index) => (<NumberDisplay key={index} num={numberList.level3[index]} 
                        onNextLevel = {() => {
                            let nList = {...numberList};
                            for(let i = 0; i < nList.level3.length; i++) {
                                if(nList.level3[i] === numberList.level3[index])  {
                                    nList.level3.splice(i, 1);
                                }
                            }
                            setNumberList(nList);
                        }}
                        onPrevLevel = {(e) => {
                            e.preventDefault();
                            let nList = {...numberList};
                            nList.level2.push(numberList.level3[index]);
                            for(let i = 0; i < nList.level3.length; i++) {
                                if(nList.level3[i] === numberList.level3[index])  {
                                    nList.level3.splice(i, 1);
                                }
                            }
                            setNumberList(nList);
                        }}
                    />))}
                </>
            ),
            state: "finish" 
        }
    ];

    let clickCount = 0
    function ClickCountCheck () {
        clickCount++;
        let clickTimer = setTimeout(() => {
            clickCount = 0
        }, 2000);

        if (clickCount === 5) {
            clearTimeout(clickTimer);
            setIsInput(true);
            console.log(isInput);
        }
    }

    return (
        <div className="orderState">
            {componentArr.map((v, index) => (<StateComponent key={index} text={v.text} contents={v.contents} number={v.number} state={v.state} onNewOrder={v.onNewOrder} />))}
            <FinishModal finishNum={finishNum} isFinish={isFinish} setIsFinish={setIsFinish} />
            <InputModal isInput={isInput} setIsInput={setIsInput} 
                orderNum={orderNum}
                setOrderNum={setOrderNum}
            />
            <SecretArea ClickCountCheck={ClickCountCheck} className="right"/>
        </div>
    );
}

export default OrderState;
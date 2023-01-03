
import React, {useState} from "react";


function Calculator(){
    const[data, setData]= useState([])
    const[result, setResult]= useState([])

    function handleClick(num){
        setData(data=>[...data, num])
    }
    function equal(){
        let dataJoin = data.join("")
        console.log(dataJoin)
        let equal=(Function('return '+dataJoin)())
        console.log(Function('return '+dataJoin)())
        setResult(equal)
    }
    function clear(){
        setData([])
        setResult([])
    }
    return(
        <>
        <div id="container">
        <h1>React Calculator</h1>
            <div id="cal-container">
            <div id="output">
                <input id="display" placeholder="Input" value={data.join('')} disabled></input>
                <input id="display" placeholder="Result" value={result} disabled></input>
            </div>
            <div id='num'>
                <ul>
                    <li><button className="btn" onClick={()=>handleClick('(')}>(</button></li>
                    <li><button className="btn" onClick={()=>handleClick(7)}>7</button></li>
                    <li><button className="btn" onClick={()=>handleClick(4)}>4</button></li>
                    <li><button className="btn" onClick={()=>handleClick(1)}>1</button></li>
                    <li><button className="btn" onClick={()=>handleClick()}></button></li>
                </ul>
                <ul>
                    <li><button className="btn" onClick={()=>handleClick(')')}>)</button></li>
                    <li><button className="btn" onClick={()=>handleClick(8)}>8</button></li>
                    <li><button className="btn" onClick={()=>handleClick(5)}>5</button></li>
                    <li><button className="btn" onClick={()=>handleClick(2)}>2</button></li>
                    <li><button className="btn" onClick={()=>handleClick(0)}>0</button></li>
                </ul>

                <ul>
                    <li><button className="btn" onClick={()=>clear()}>C</button></li>
                    <li><button className="btn" onClick={()=>handleClick(9)}>9</button></li>
                    <li><button className="btn" onClick={()=>handleClick(6)}>6</button></li>
                    <li><button className="btn" onClick={()=>handleClick(3)}>3</button></li>
                    <li><button className="btn" onClick={()=>handleClick('.')}>.</button></li>
                </ul>
                <ul>
                    
                    <li><button className="btn" onClick={()=>handleClick('/')} value={3}>/</button></li>
                    <li><button className="btn" onClick={()=>handleClick('*')} value={3}>*</button></li>
                    <li><button className="btn" onClick={()=>handleClick('-')} value={3}>-</button></li>
                    <li><button className="btn" onClick={()=>handleClick('+')} value={3}>+</button></li>
                    <li><button className="btn" onClick={()=>equal()}>=</button></li>
                </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Calculator
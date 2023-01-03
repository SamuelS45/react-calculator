import React, {useState} from "react";



function InputHooks(){
    const[data, setData] = useState('')
    const[toggle, setToggle] = useState(false)
    const styleTrue={
        backgroundColor: 'lightblue',
        transition: '0.5s'
    }
    const styleFalse={
        backgroundColor: 'red',
        height: '50px',
        transition: '0.5s',
    }
    function handleChange(e){
        setData(e.target.value)
    }
    function handleClick(){
        // alert(`Your Name is ${data}+${toggle}`)
        setToggle(current => !current)
        console.log(toggle)
    }
    return(
        <>
        <h1>{data}</h1>
        <input onChange={handleChange} value={data}></input>
        <button style={toggle?styleTrue:styleFalse} onClick={handleClick}>See Name</button>
        </>
    )
}

export default InputHooks
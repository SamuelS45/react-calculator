function Button(){
    const clickHandler=()=>{
        alert('LIFE IS GOOD')
    }
    return(
        <button onClick={clickHandler}>
            Alert Me
        </button>
    )
}

export default Button
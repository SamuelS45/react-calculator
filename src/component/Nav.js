import React from "react";
import './style.css'


function Nav(){
    return(
        <div className="nav">
        {/* <img alt="logo" src={''}></img> */}
        <h1>💖</h1>
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <div>

                <div className="droplink">
            <li>DropDown</li>
            <ul className="dropdown">
                <li>life</li>
                <li>Love</li>
                <li>Hate</li>
            </ul>
                </div>
            </div>
        </ul>
        </div>
    )
}



export default Nav
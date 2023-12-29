import React from "react";

export default function Button1(props){
    const handleClick = ()=> {
        props.newArr()
    }
    return(
        <button onClick={handleClick}>Create New Array</button>
    )
}
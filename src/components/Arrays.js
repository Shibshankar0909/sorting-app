import React from "react"

export default function Array(props){
    const num=props.num
    const arr=props.arr
    const chart = arr.map((value)=>
    <div className="bar" style={{
        height: `${value}px`
    }}></div>
    )
    return(
        <div className="box-container">
        {chart}
        </div>
    )
}
import React from 'react';
import './App.css';
import Button1 from './components/Button1';
import Bubble from './components/bubble';

function App() {
  const color =['turquoise','red','blue']
  const [value, setValue] = React.useState('Bubble');

  const handleChange = (event) => {
      setValue(event.target.value);
  };
  const [num,setNum]=React.useState(40)
  const [col,setCol]=React.useState(new Array(num).fill(0))
  const createArr = function (arr) {
    for (let i = 0; i < num; i++) {
      arr.push(Math.floor(Math.random() * (500 - 10) + 10))
    }
    return arr
  }
  const [arr, setArr] = React.useState(
    //[500,400,300,200,100]
    createArr([])
  )

  let stepArr=[arr]
  let colArr=[col];

  const newArr=()=> {
    setArr(createArr([]))
  } 

  const start = (i,n)=> {while(i<n) {
    i++;
    project(i,stepArr.shift(),colArr.shift())
  }}
  
  function project(i,array1,array2) {
    setTimeout(function(){
      setArr(array1);
    }, 10 * i );
  }

  const chart = arr.map((value,i)=>
    <div className="bar" style={{
        height: `${value}px`,
        background:`${color[col[i]]}`
    }}></div>
    )
    
  function handleInptChange(e){
    setNum(e.target.value)
  }  
  
  return (
    <div className="app">
      <div className="box-container">
        {chart}
      </div>
      <div className="inpt">
          <label>
          Enter Array Size
          <input type="number" onChange={handleInptChange} value={num} placeholder='Default size 50'></input>
          </label>
      </div>
      <div className='dropdown'>
            <label>
                What sorting algorithm to implement?
                <select value={value} onChange={handleChange}>
                    <option value="Bubble">Bubble Sort</option>
                    <option value="Insertion">Insertion Sort</option>
                    <option value="Merge">Merge Sort</option>
                </select>
            </label>
        </div>
      <Button1 stepArr={stepArr}  newArr={newArr}/>
      <Bubble value={value} array={arr} start={start} stepArr={stepArr} num={num} colArr={colArr} />
    </div>
  );
}

export default App;
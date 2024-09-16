import React from 'react';
import './App.css';
import Button1 from './components/Button1';
import Bubble from './components/bubble';

function App() {
  const color = ['turquoise', 'red'];
  const [value, setValue] = React.useState('Bubble');
  const [num, setNum] = React.useState(40);
  const [speed, setSpeed] = React.useState(10); // Default speed is 50ms

  const handleChange = (event) => setValue(event.target.value);

  const [col, setCol] = React.useState(new Array(num).fill(0));

  const createArr = function (arr) {
    for (let i = 0; i < num; i++) {
      arr.push(Math.floor(Math.random() * (500 - 10) + 10));
    }
    return arr;
  };

  const [arr, setArr] = React.useState(createArr([]));

  let stepArr = [arr];
  let colArr = [col];

  const newArr = () => setArr(createArr([]));

  const start = (i, n) => {
    while (i < n) {
      i++;
      project(i, stepArr.shift(), colArr.shift());
    }
  };

  function project(i, array1, array2) {
    setTimeout(() => {
      setArr(array1);
      setCol(array2);
    }, speed * i); // Adjust speed dynamically
  }

  const chart = arr.map((value, i) => (
    <div
      className="bar"
      style={{
        height: `${value}px`,
        background: `${color[col[i]]}`,
      }}
    ></div>
  ));

  const handleInptChange = (e) => setNum(e.target.value);

  const handleSpeedChange = (e) => setSpeed(e.target.value);

  return (
    <div className="app">
      <div className="box-container">{chart}</div>

      <div className="controls">
        <label>
          Enter Array Size
          <input type="number" onChange={handleInptChange} value={num} placeholder="Default size 50" />
        </label>

        <label>
          Adjust Speed
          <input type="range" min="10" max="2000" value={speed} onChange={handleSpeedChange} />
          <span>{speed} ms</span>
        </label>

        <div className="dropdown">
          <label>
            Sorting Algorithm
            <select value={value} onChange={handleChange}>
              <option value="Bubble">Bubble Sort</option>
              <option value="Insertion">Insertion Sort</option>
              <option value="Merge">Merge Sort</option>
            </select>
          </label>
        </div>

        <Button1 newArr={newArr} />
        <Bubble value={value} array={arr} start={start} stepArr={stepArr} num={num} colArr={colArr} />
      </div>
    </div>
  );
}

export default App;

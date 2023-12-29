import React from 'react';

export default function Bubble(props) {
  const colArr=props.colArr;
  const arr = props.array.slice();
  const stepArr = props.stepArr;
  const value=props.value
  function handleClick(){
    if(value==="Bubble"){
      bblSort(arr);
    }
    if(value==="Insertion"){
      insertionSort(arr);
    }
    if(value==="Merge"){
      mergeSrt(arr);
    }
  }

  function mergeSrt(arr){
    const sortedArr = arr.slice();
    mergeSort(sortedArr,0, sortedArr.length-1);
    console.log(stepArr.length,colArr.length);
    props.start(0, stepArr.length);
  }

  function mergeSort(arr, l, r) {
    if (l < r) {
      // m is the point where the array is divided into two subarrays
      let m = Math.floor(l + (r - l) / 2);
  
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);
  
      // Merge the sorted subarrays
      merge(arr, l, m, r);
    }
  }

  function merge(arr,p,q,r) {
  
    // Create L ← A[p..q] and M ← A[q+1..r]
    let n1 = q - p + 1;
    let n2 = r - q;
  
    let L=[];
    let M=[];
  
    for (let i = 0; i < n1; i++){
      L.push(arr[p + i]);
      //stepArr.push([...arr]);
    }
    for (let j = 0; j < n2; j++){
      M.push(arr[q + 1 + j]);
      //stepArr.push([...arr]);
    }
  
    // Maintain current index of sub-arrays and main array
    let i, j, k;
    i = 0;
    j = 0;
    k = p;
  
    // Until we reach either end of either L or M, pick larger among
    // elements L and M and place them in the correct position at A[p..r]
    while (i < n1 && j < n2) {
      const cols=new Array(props.num).fill(0);
      if (L[i] <= M[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = M[j];
        j++;
      }
      cols[i]=1;
      cols[j]=1;
      colArr.push([...cols]);
      stepArr.push([...arr]);
      k++;
    }
  
    // When we run out of elements in either L or M,
    // pick up the remaining elements and put in A[p..r]
    while (i < n1) {
      const cols=new Array(props.num).fill(0);
      arr[k] = L[i];
      i++;
      k++;
      cols[i]=1;
      colArr.push([...cols]);
      stepArr.push([...arr]);
    }
  
    while (j < n2) {
      const cols=new Array(props.num).fill(0);
      arr[k] = M[j];
      j++;
      k++;
      cols[j]=1;
      colArr.push([...cols]);
      stepArr.push([...arr]);
    }
    stepArr.push([...arr]);
    colArr.push([...new Array(props.num).fill(0)]);
  }

  function insertionSort(arr) {
    const sortedArr = arr.slice();
  
    for (let i = 1; i < sortedArr.length; i++) {
      const cols=new Array(props.num).fill(0);
      let current = sortedArr[i];
      cols[i]=1;
      let j = i - 1;
  
      while (j >= 0 && sortedArr[j] > current) {
        cols[j]=1;
        sortedArr[j + 1] = sortedArr[j];
        j--;
        stepArr.push([...sortedArr]);
        colArr.push([...cols]);
        cols[j+1]=0;
      }
      sortedArr[j + 1] = current;
    }
    stepArr.push([...sortedArr]);
    colArr.push([...new Array(props.num).fill(0)]);
    props.start(0, stepArr.length);
  }
  

  function bblSort(arr) {
    const cols=new Array(props.num).fill(0);
    const sortedArr = arr.slice();

    for (let i = 0; i < sortedArr.length; i++) {
      for (let j = 0; j < sortedArr.length - i - 1; j++) {
        cols[j]=1;
        cols[j+1]=1;
        if (sortedArr[j] > sortedArr[j + 1]) {
          let temp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = temp;
        }
        stepArr.push([...sortedArr]);
        colArr.push([...cols]);
        cols[j]=0;
        cols[j+1]=0;
        colArr.push([...cols]);
      }
    }
    props.start(0,stepArr.length)
  }

  return (
    <button onClick={() => handleClick()}>Sort</button>
  );
}

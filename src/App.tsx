import React, { useState, useCallback, useEffect } from "react";
import './App.css';

const App: React.FC = () => {
  // Grid constants
  const ROWS: number = 25;
  const COLS: number = 75;

  const [gridArr, setGridArr] = useState(new Array());


  useEffect(() => {
    // Create 2d matrix that the search alogrithms will work on
    const tempArr: Array<Array<Number>> = new Array();
    for (let i = 0; i < ROWS; i++) {
      tempArr.push(new Array(COLS).fill(0));
    }
    setGridArr(tempArr);
  }, [])

  return (
    <div>hello</div>
  )
};

export default App;

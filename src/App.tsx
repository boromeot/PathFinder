import React, { useState, useEffect } from "react";
import './App.css';

const App: React.FC = () => {
  // Grid constants
  const ROWS: number = 30;
  const COLS: number = 75;

  const [gridArr, setGridArr] = useState(new Array());

  useEffect(() => {
    // Create 2d matrix that the search alogrithms will work on
    const tempArr: Array<Array<Number>> = new Array();
    for (let i = 0; i < COLS; i++) {
      tempArr.push(new Array(ROWS).fill(0));
    }
    setGridArr(tempArr);
  }, [])

  return (
    <div className="grid">
      {gridArr.map((col) => {
        return <div className="col">
            {col.map(() => {
              return <div className="cell"></div>
            })}
        </div>
      })}
    </div>
  )
};

export default App;

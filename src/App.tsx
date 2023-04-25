import React, { useState, useEffect } from "react";
import './App.css';

const App: React.FC = () => {
  // Grid constants
  const ROWS: number = 30;
  const COLS: number = 75;

  const [gridArr, setGridArr] = useState(new Array());

  const map: {[key: number]: string} = {
    0 : 'whitesmoke', // Unsearched
    1 : 'purple', // Searched
    2 : 'green', // Start
    3 : 'black', // Wall
    4 : 'red' // End
  }

  useEffect(() => {
    // Create 2d matrix that the search alogrithms will work on
    const tempArr: Array<Array<Number>> = new Array();
    for (let i = 0; i < COLS; i++) {
      tempArr.push(new Array(ROWS).fill(2));
    }
    setGridArr(tempArr);
  }, [])

  function handleClick(i: number, j: number) {
    const newGrid = gridArr.slice();
    newGrid[i][j] = 1;
    setGridArr(newGrid);
  }

  return (
    <div className="grid">
      {gridArr.map((col: Array<number>, i: number) => {
        return <div className="col" key={i}>
            {col.map((cellValue: number, j: number) => {
              return <div className={`cell`} style={{backgroundColor: map[cellValue]}} onClick={() => handleClick(i, j)} key={`${i}-${j}`} />
            })}
        </div>
      })}
    </div>
  )
};

export default App;

import React, { useState, useEffect } from "react";
import './App.css';

const App: React.FC = () => {
  // Grid constants
  const ROWS: number = 30;
  const COLS: number = 75;

  const [gridArr, setGridArr] = useState(new Array());
  const [cell, setCell] = useState<number>(0);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const map: {[key: number]: string} = {
    0 : 'whitesmoke', // Unsearched
    1 : 'purple', // Searched
    2 : 'green', // Start
    3 : 'black', // Wall
    4 : 'red' // End
  }

  useEffect((): void => {
    // Create 2d matrix that the search alogrithms will work on
    const tempArr: Array<Array<Number>> = new Array();
    for (let i = 0; i < COLS; i++) {
      tempArr.push(new Array(ROWS).fill(0));
    }
    setGridArr(tempArr);
  }, [])

  // Change cell to different cell on click
  function handleClick(i: number, j: number) {
    const newGrid = gridArr.slice();
    newGrid[i][j] = cell;
    setGridArr(newGrid);
  }

  // Change multiple cells while mouse is held down and moving over them
  function handleMouseOver(i: number, j: number) {
    if (isMouseDown) {
      const newGrid = [...gridArr];
      newGrid[i][j] = cell;
      setGridArr(newGrid);
    }
    console.log(gridArr[i][j])
  }

  return (
    <>
      <div>
        <button onClick={() => setCell(0)}>Unsearched</button>
        <button onClick={() => setCell(2)}>Start</button>
        <button onClick={() => setCell(3)}>Wall</button>
        <button onClick={() => setCell(4)}>End</button>
      </div>
      <div className="grid" onMouseDown={() => setIsMouseDown(true)} onMouseUp={() => setIsMouseDown(false)}>
        {gridArr.map((col: number[], i: number) => {
          return <div className="col" key={i}>
              {col.map((cellValue: number, j: number) => {
                return <div 
                  className={`cell`} 
                  style={{backgroundColor: map[cellValue]}} 
                  onClick={() => handleClick(i, j)}
                  onMouseOver={() => handleMouseOver(i, j)}
                  key={`${i}-${j}`} 
                />
              })}
          </div>
        })}
      </div>
    </>
  )
};

export default App;


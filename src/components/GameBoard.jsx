import React from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = React.useState(initialGameBoard);

    function handleGameBoard({ rowIndex, colIndex }){
        setGameBoard();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() => handleGameBoard(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>)}
                </ol>
            </li>        
            )}
        </ol>
    );
}
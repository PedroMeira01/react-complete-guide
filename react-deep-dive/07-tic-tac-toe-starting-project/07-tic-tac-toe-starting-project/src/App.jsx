import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

import { useState } from "react"

function App() {
  
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? '0' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if ( prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = '0';  
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex}, player: activePlayer},
        ...prevTurns];

        return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="0" isActive={activePlayer === "0"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log/>
    </main>
  )
}

export default App
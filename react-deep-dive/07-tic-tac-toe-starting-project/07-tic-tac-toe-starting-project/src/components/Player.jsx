import { useState } from "react"

const Player = ({ initialName, symbol, isActive }) => {

  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handlePlayer() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    editablePlayerName = (
        <input type="text" required value={playerName} onChange={handleChange}/>
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handlePlayer}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player
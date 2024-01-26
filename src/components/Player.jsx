import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerNameVal] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    let buttonCaption = 'edit';

    function handleEditClick(){
    setIsEditing((isEditing) => !isEditing);

    if(isEditing){
    onChangeName(symbol, playerName);
    }
}
function handleChange(event){
    setPlayerNameVal(event.target.value);
}

let editablelayerName = <span className="player-name">{playerName}</span>;

if(isEditing){
    editablelayerName = <input type="text" required value={playerName} onChange={handleChange} />
    buttonCaption = 'save';
}

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
            {editablelayerName} 
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonCaption}</button>
          </li>
    )
}
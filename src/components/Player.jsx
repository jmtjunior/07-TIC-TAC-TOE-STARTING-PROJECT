import React from "react";

export default function Player( {children, symbol} ){
    const [playerName, setPlayerName] = React.useState(children);
    const [isEditing, setEditing] = React.useState(false);

    function handleEditClick(){
        setEditing(editing => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = <input type="text" required="true" defaultValue={playerName} onChange={handleChange}></input>
    }

    return (<li>
        <span className="player">
            {editablePlayerName}            
            <span className="player-symbol">{symbol}</span>            
        </span>
        <button onClick={() => handleEditClick()}>{isEditing ? "Save" : "Edit"}</button>
    </li>);
}
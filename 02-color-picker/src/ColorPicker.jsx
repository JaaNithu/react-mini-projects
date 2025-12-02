import "./index.css";
import { useState } from "react";


const ColorPicker = () => {

    const[color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-container">
            <h1>COLOR PICKER!</h1>
            <div className="color-display" style={{backgroundColor: color}}> 
            </div>
            <p>Selected Color: {color}</p>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}

export default ColorPicker
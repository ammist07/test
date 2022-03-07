import React from 'react'
import "./Cell.css"
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import sound from './rename.mp3' 

const Cell = ({isLit, flipCellsAroundMe}) => {

    let classes = "Cell" + (isLit ? " Cell-lit" : "")
    let audio = new Audio(sound)

    const handleClick = (evt) => {
        audio.play()
        flipCellsAroundMe()
    }

    return (
        <td>
            {
                isLit ? <div className="Cell" onClick={handleClick}>
                            <LocalFloristIcon id="icon" sx={{ color: 'pink', fontSize: 40 }} />  
                        </div> : <div className="Cell" onClick={handleClick}>

                        </div>
            
            }
        </td>
    )

}

export default Cell
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Node(props){
    function handleClick(){
        props.onDelete(props.id)
    }
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="delbtnn" onClick={handleClick}>
          {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
          {/* <FontAwesomeIcon icon={faXmark}/> */}
           <DeleteIcon/>
        </button>
    </div>
} 

export default Node; 
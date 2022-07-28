import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function NewNode(props){


    // const [title,setTitle]=useState("");
    // const [body,setBody]=useState("");


    // instead of two we can use single 
    const [note,setNote]=useState({
        title:"",
        content:""
    })


    // function addContent(event){
    //     console.log("new content is added");
    //     const newValue=event.target.value;
    //     setTitle(newValue);
    // } // "devDependencies": {
  //   "gh-pages": "^4.0.0"
  // }

    // function addbody(event){
    //     const newValue=event.target.value;
    //     setBody(newValue);
    // }

    function handleChange(event){
        // destructrucing the event
            const {name,value}=event.target;
            setNote(prevNote => {
                return {
                    ...prevNote,
                    [name]:value
                };
            });
    }


    function submitNote(event){
         props.onAdd(note);
         //to clear the input area
         setNote({
            title:"",
             content:""
         })
            event.preventDefault();
    }
  
    const [zoom,setZoom]=useState(false);
   function zoomInput(){
        setZoom(true);
   }

    return <div className="newNode">
        <form action="" className="create-note">
            {zoom && <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>}
       {/* <input type="text" placeholder="Take a note..."  onChange={addbody} value={note.content}/> */}
       <textarea  onClick={zoomInput} name="content" placeholder="Take a note..." value={note.content} rows={zoom? 3: 1}  onChange={handleChange}/>
       {/* <button className="addbtn" onClick={submitNote} >
        <AddIcon/>
       </button> */}
       <Zoom in={zoom} > 
       <Fab  className="addbtn" onClick={submitNote} >
        <AddIcon />
        {/* Add */}
       </Fab>
       </Zoom>
       </form></div>
}

export default NewNode;
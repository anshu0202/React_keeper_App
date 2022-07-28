import React,{useState} from "react";
import Header from "./Header";
import Node from "./Node";
import Footer from "./Footer";
import NewNode from "./NewNode";
function App1(){


//     const [items,setItem]=useState([]);
//     const [content,setContent]=useState([]);
//     function addItem(title){
//         console.log("Item is added");
//         setItem((preItems)=>{
//            return [...preItems,title];
//         })
//     }
//     function addBody(body){
//         setContent((preContent) => {
//             return [...preContent,body];
//         })
//     }
//    function deleteItem(id){
//     setItem( preItems => {
//           return preItems.filter( (item,index) => {
//                 return index!==id;
//           });
//     });
//  }



    // return <div>
    //     <Header/>
    //     <NewNode onAdd={addItem} onAddBody={addBody} />
    //     <div className="box">     
    //     <ul className="note"> 
    //     { items.map((newNode,index) => {
    //         console.log("index of note is "+index);
    //              return  <Node text={newNode} onChecked={deleteItem} key={index} id={index} /> })}
    //              </ul>
    //              <ul>
    //     {content.map((newBody,index) => {
    //           console.log("index of body is "+index);
    //                 return <Node_Para text ={newBody} key={index} id={index}/>
    //              })}
    //              </ul>
    //     {/* <Node/> */}

    //     </div>
    //     <Footer/>
    // </div> 
   
    const [notes,setNotes]=useState([]);
    function addNote(newNote){
            setNotes(preNotes => {
                return [...preNotes,newNote];
            });
    }


        function deleteNode(id){
                setNotes(preNotes => {
                    return preNotes.filter((noteItem,index) => {
                        return index!==id;
                    }) 
        }) 
    }

    return <div>
    <Header/>
    <NewNode  onAdd={addNote}/>   
   { notes.map((noteItem,index) => {
        return <Node  title={noteItem.title}
        content ={noteItem.content}
        onDelete={deleteNode} key ={index} id={index}/>
    })}
    <Footer/>
</div>  
}
export default App1; 
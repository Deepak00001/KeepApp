import React, {useState} from "react";
import Header from "./Header";
import "./index.css";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () => {
    const [addItems, setAddItems] = useState([]);

    const addNote = (note) => {
         setAddItems((preData) => {
             return[...preData, note];
         });
         console.log(note);
    } 

    const onDelete = (id) => {
        setAddItems((oldData) => {
            oldData.filter((currdata, index)=>{
                return index!==id;
            })
        })
    }

    return (
        <>
            <Header/>
            <CreateNote
                passNote={addNote}
            />
            
            {addItems.map((val,index) =>{
                return(
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                )
            })}
            <Footer/>
        </>
    );
}
export default App;
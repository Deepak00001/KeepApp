import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { NoEncryption } from "@material-ui/icons";

const CreateNote = (props) => {
    const[note, setNote] = useState({
        title: "",
        content: ""
    });

const inputEvent = (event) =>{
    const {name , value} = event.target;

    setNote((preValue) => {
        return {
            ...preValue,
            [name] : value
        }
    })

    console.log(note);

}

    const addEvent = () => {
        props.passNote(note)
        setNote({title: "",
        content: ""});
    }



    return(
        <>
            <div className="main_note">
                <form className="form">
                    <input type="text" placeholder="Title" autoComplete="off" name="title" value={note.title}  onChange={inputEvent}  />
                    <textarea rows="" column="" placeholder="Write Your Note Here" name="content" value={note.content} onChange={inputEvent}  ></textarea>
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign"/>
                    </Button>
                </form>

            </div>
        </>
    )

}
export default CreateNote;
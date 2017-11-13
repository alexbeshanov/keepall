import React from "react";
import "../Save-Remove/savePasswordFirebase";
import "../style/list.css";
import NotesDataList from "./NotesList_Data";
import {removeFirebaseNotes} from "../Save-Remove/removeFirebase";

export const Notes = (props) => (
    <div className="listbox">
        <h2>Список сохраненных заметок</h2>
        <div className="listbox-size">
            <NotesDataList history={props.history}/>
        </div>
        <button onClick={removeFirebaseNotes} className="listbox_button">
            <div>
                <p>Удалить все заметки</p>
            </div>
        </button>
    </div>
);
export default Notes;
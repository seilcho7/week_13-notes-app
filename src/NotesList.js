import React from 'react';
import styles from './NotesList.module.css';

function NotesListItem({key, id, text, handleClick}) {
    return (
        <li>
            <a 
                href="#"
                onClick={(e) => {
                    // preventDefault() prevent link from trying to go to other page
                    e.preventDefault();
                    console.log('you clicked');
                    handleClick(id);
                }}
            >
                {text}
            </a>
        </li>
    )
}

export default function NotesList({notes, handleSelection}) {
    const items = notes.map((note) => 
        <NotesListItem id={note.id} text={note.title} handleClick={handleSelection} />
    );

    return (
        <ul className={styles.list}>
            {items}
        </ul>
    )
}
import React from 'react';
import styles from './NotesList.module.css';

function NotesListItem({text}) {
    return (
        <li>{text}</li>
    )
}

export default function NotesList({notes}) {
    const items = notes.map(note => 
        <NotesListItem text={note.title} />
    );

    return (
        <ul className={styles.list}>
            {items}
        </ul>
    )
}
import React from 'react';
import NotesList from './NotesList';
import NotesDetail from './NotesDetail';
import styles from './NotesApp.module.css';

export default class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // This will hold an array of objects
            notes: [
                {
                    id: '1001',
                    title: 'first note',
                    text: 'this is the first note'
                },
                {
                    id: '1002',
                    title: 'second note',
                    text: 'yonder, it is the second note'
                },
                {
                    id: '1003',
                    title: 'third note',
                    text: 'imagine poop emojis here'
                },
            ]
        }
    }

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.list}>
                    <NotesList notes={this.state.notes} />
                </div>
                <div className={styles.detail}>
                    <NotesDetail />
                </div>
            </div>
        )
    }
}
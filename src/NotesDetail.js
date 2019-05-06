import React from 'react';

function NotesEditor({text}) {
    return (
        <textarea value={text}></textarea>
    );
}

export default class NotesDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
    }
    
    render() {
        // declares note variable and assigns them to the properties from this.props
        // where the name matches.
        const { note } = this.props;
        const { isEditing } = this.state;
        return (
            <div>
                {
                    isEditing ? <NotesEditor text={note.text} /> : note.text
                }
            </div>
        );
    }
}
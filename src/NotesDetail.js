import React from 'react';

export default class NotesDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        // declares note variable and assigns them to the properties from this.props
        // where the name matches.
        const { note } = this.props;
        return (
            <div>
                {note.text}
            </div>
        );
    }
}
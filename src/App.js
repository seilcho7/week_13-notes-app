import React from 'react';
import './App.css';
import NotesApp from './NotesApp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <NotesApp />
      </div>
    );
  }
}

export default App;

import React from 'react';

import ListaNote from './ListaNote';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { note: [] };
  }

  aggiungiNota = value => {
    let note = this.state.note;
    note.unshift(value);

    this.setState({ note: note });
  };

  render = () => {
    return (
      <div className="container my-4">
        <SearchBar aggiungiNota={this.aggiungiNota} />
        <hr />
        <ListaNote lista={this.state.note} />
      </div>
    );
  };
}

export default App;

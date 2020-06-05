import React from 'react';

import ListaNote from './ListaNote';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { note: [], input: '' };
  }

  aggiungiNota = () => {
    let note = this.state.note;
    note.push(this.state.input);

    this.setState({ note: note, input: '' });
  };

  aggiornaInput = value => {
    this.setState({ input: value });
  };

  render = () => {
    return (
      <div className="container my-4">
        <SearchBar
          aggiungiNota={this.aggiungiNota}
          aggiornaInput={this.aggiornaInput}
          input={this.state.input}
        />
        <hr />
        <ListaNote lista={this.state.note} />
      </div>
    );
  };
}

export default App;

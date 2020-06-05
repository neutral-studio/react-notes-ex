import React from 'react';

import Nota from './Nota';

class ListaNote extends React.Component {
  renderNotes = () => {
    return this.props.lista.map(nota => {
      return <Nota titolo={nota} key={Math.random()} />;
    });
  };

  render() {
    return <ul className="list-group">{this.renderNotes()}</ul>;
  }
}

export default ListaNote;

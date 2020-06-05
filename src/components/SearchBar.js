import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: '' };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.aggiungiNota, false);
  }

  aggiungiNota = e => {
    if (((e && e.keyCode === 13) || e.button) && this.state.input !== '') {
      this.props.aggiungiNota(this.state.input);
      this.setState({ input: '' });
    }
  };

  render() {
    return (
      <div className="form-group">
        <input
          className="form-control"
          onChange={({ target: { value } }) => this.setState({ input: value })}
          value={this.state.input}
          placeholder="La tua nota"
        ></input>
      </div>
    );
  }
}

export default SearchBar;

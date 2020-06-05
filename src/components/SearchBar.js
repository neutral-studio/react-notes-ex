import React from 'react';

export default props => {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col-8">
          <input
            className="form-control"
            onChange={({ target: { value } }) => props.aggiornaInput(value)}
            value={props.input}
          ></input>
        </div>
        <div className="col">
          <button
            className="btn btn-primary shadow"
            onClick={props.aggiungiNota}
          >
            Aggiungi
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

export default ({ titolo, numeroRandom }) => {
  return (
    <li className="list-group-item" key={numeroRandom}>
      {titolo}
    </li>
  );
};

import React from 'react';

const Repo = props => (
  <p>
    <a href={props.url} target="_BLANK" rel="noopener noreferrer">{props.name}</a>
    <span>{props.description}</span>
  </p>
);

export default Repo;
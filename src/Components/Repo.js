import React from 'react';

const Repo = props => (
  <p>
    <a href={props.url} target="_BLANK" rel="noopener noreferrer">{props.name}</a> <br></br>
    <span><b>Description:</b> {props.description}</span> <br></br>
    <span><b>Open Issues:</b>  {props.issueCount}</span><br></br>
    <span><b>Forks:</b> {props.forksCount}</span><br></br>
    <span><b>Watchers:</b> {props.watchersCount}</span>
  </p>
);

export default Repo;
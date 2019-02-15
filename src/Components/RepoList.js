import React from 'react';
import Repo from './Repo';
import NoReposExist from './NoReposExist';

const RepoList = props => {

  const results = props.data;
  let repos;
  if (results.length) {
    repos = results.map(repo => <Repo name={repo.name} url={repo.html_url} description={repo.description} key={repo.id} />);
  } else {
    repos = <NoReposExist />
  }

  return(
    <ul className="repo-list">
      {repos}
    </ul>
  );
}

export default RepoList;

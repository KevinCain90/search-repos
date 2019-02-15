import React from 'react';
import Repo from './Repo';
import NoReposExist from './NoReposExist';
import styled from 'styled-components';

const StyledRepoList = styled.div`
  display: block;
  margin: auto;
  margin-bottom: .8em;
  position: relative;
`;

const RepoList = props => {

  const results = props.data;
  let repos;
  if (results.length) {
    repos = results.map(repo => <Repo name={repo.name} url={repo.html_url} description={repo.description} issueCount={repo.open_issues_count} forksCount={repo.forks_count} key={repo.id} watchersCount={repo.watchers_count}/>);
  } else {
    repos = <NoReposExist />
  }

  return(
    <StyledRepoList>
      {repos}
    </StyledRepoList>
  );
}

export default RepoList;

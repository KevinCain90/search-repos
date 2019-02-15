import React from 'react';
import styled from 'styled-components';

const StyledNoReposExist = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NoReposExist = props => (
  <StyledNoReposExist>
    <h3>No Repos match your search... Please try again.</h3>
  </StyledNoReposExist>
);

export default NoReposExist;
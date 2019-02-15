import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const StyledText = styled.input`
  height: 30px;
  border-radius: 2.5px;
  border: solid 1px #dedede;
  padding: 10px;
  margin-right: 40px;
  box-sizing: border-box;
  font-size: 14px;
  width: 100%;
  &:focus {
    border: solid 1px #67caff;
  }
  min-width: 200px;
`;

export default class SearchForm extends Component {

  state = {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <StyledLabel>Search</StyledLabel>
        <StyledText
          type="search"
          onChange={this.onSearchChange}
          name="search"
          ref={(input) => this.query = input}
          placeholder="Search..." />
      </form>
    );
  }
}

import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import RepoList from './Components/RepoList';

const MainHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  min-height: 80px;
  z-index: 1000;
`;

const Inner = styled.div`
  width: 90%;
  max-width: 1025px;
  margin: auto;
`;

const MainTitle = styled.span`
  font-size: 1.4em;
  line-height: 100px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
`;

const MainContent = styled.div`
  width: 90%;
  max-width: 1025px;
  margin: auto;
  &:after {
    content: " ";
    display: table;
    clear: both;
  }
`;
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      repos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'web') => {
    axios.get(`https://api.github.com/search/repositories?q=${query}`)
      .then(response => {
        this.setState({
          query: query,
          repos: response.data.items,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error generating data correctly', error);
      });
  }

  render() {
    return (
      <div>
        <MainHeader>
          <Inner>
            <MainTitle>GitHub Repo Search</MainTitle>
            <SearchForm onSearch={this.performSearch} />
          </Inner>
        </MainHeader>
        <MainContent>
          {
            (this.state.loading)
              ? <p>Loading...</p>
              : <div><h2>{this.state.query}</h2><RepoList data={this.state.repos} /></div>
          }
        </MainContent>
      </div>
    );
  }
}


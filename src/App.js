import React, { Component } from 'react'
import './App.css';
import './bootstrap.min.css';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import {Movie} from './components/Movie'



class App extends Component {
  state = { results: []  };
  _handleResults = (results) => {
    this.setState({ results });
  };

  _renderResults() {
    const { results } = this.state;
    return results.map(movie => {
      return(
        <Movie
        key={movie.imdbID}
        title={movie.Title}
        year={movie.Year}
        poster={movie.Poster}
        />
      
      ) 
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title>Search Movies</Title>
          <div className="container">
            
              <SearchForm onResults={this._handleResults} />
            </div>
         
          
        </header>
        <div>
            {this.state.results.length  === 0
            
            ? <p>Not Found</p>
             : this._renderResults()
            }
          </div>
      </div>
    );
  }
}

export default App;

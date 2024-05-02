import React from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './components/Playlist/Playlist';
import SearchResults from './components/SearchResults/SearchResults';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SearchResults />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work in Progress
        </p>
        <Playlist />
      </header>
    </div>
  );
}

export default App;
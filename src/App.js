import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tracklist from './components/Tracklist/Tracklist';
import Playlist from './components/Playlist/Playlist';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Tracklist />
          <Playlist />
        </p>
        <p>
          Work in Progress
        </p>
      </header>
    </div>
  );
}

export default App;
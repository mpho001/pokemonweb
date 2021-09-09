import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { PokemonList } from './features/pokemonList/PokemonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <PokemonList />
      </header>
    </div>
  );
}

export default App;

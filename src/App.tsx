import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import { Counter } from './features/counter/Counter';
import { PokemonList } from './features/pokemonList/PokemonList';
import { PokemonDetails } from './features/pokemonDetails/PokemonDetails';


function App() {
  return (
    <div >
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route path="/bag">
            <Counter />
          </Route>
          <Route path="/details/:name" component={PokemonDetails}>
          </Route>
        </Switch>
    </div>
  )
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { PokemonList } from './features/pokemonList/PokemonList';
import { PokemonDetails } from './features/pokemonDetails/PokemonDetails';


function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route path="/details/:id" component={PokemonDetails} />
      </Switch>
    </div>
  )
}

export default App;

import React from 'react';
import { Link, Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import { Counter } from './features/counter/Counter';
import { PokemonList } from './features/pokemonList/PokemonList';
import { createBrowserHistory } from "history";
import { PokemonBag } from './features/pokemonBag/PokemonBag';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { PokemonDetails } from './features/pokemonDetails/PokemonDetails';


function App() {
  return (
    <div >
        {/* <ToggleButtonGroup>
          <ToggleButton value="all">
            <Link to="/" style={{ textDecoration: 'none' }}>All</Link>
          </ToggleButton>
          <ToggleButton value="bag">
            <Link to="/bag" style={{ textDecoration: 'none' }}>Bag</Link>
          </ToggleButton>
        </ToggleButtonGroup> */}
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route path="/bag">
            <Counter />
          </Route>
          <Route path="/details/:name" component={PokemonDetails}>
            {/* <PokemonDetails pokemon={{}} /> */}
          </Route>
        </Switch>
    </div>
  )
}

export default App;

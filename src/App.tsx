import React from 'react';
import { Link, Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import { Counter } from './features/counter/Counter';
import { PokemonList } from './features/pokemonList/PokemonList';
import { createBrowserHistory } from "history";
import { PokemonBag } from './features/pokemonBag/PokemonBag';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <ToggleButtonGroup>
            <ToggleButton>
              <Link to="/" style={{ textDecoration: 'none' }}>All</Link>
            </ToggleButton>
            <ToggleButton>
              <Link to="/bag" style={{ textDecoration: 'none' }}>Bag</Link>
            </ToggleButton>
          </ToggleButtonGroup>



          <Switch>
            <Route exact path="/">
              <PokemonList />
            </Route>
            <Route path="/bag">
              <PokemonBag />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

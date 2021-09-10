import React from 'react';
import styles from './PokemonList.module.css';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchPokemon, selectPokemon } from './pokemonListSlice';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export function PokemonList() {
  const allPokemon = useAppSelector(selectPokemon);
  const dispatch = useAppDispatch();

  const [query, setQuery] = React.useState('');
  const [pokemon, setPokemon] = React.useState(allPokemon);

  // runs on page load
  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  const history = useHistory();

  const handleOnClickPokemon = (name: string, singlePokemon: any) => {
    history.push(
        `details/${name}`, singlePokemon
    )
  };

  const handleKeyPress = (event: any) => {
    setQuery(event.target.value);
  }

  const filterPokemon = () => {
    const temp = allPokemon.filter((value) => {
      if (query === '') {
        return true;
      } else {
        return value.data.name.startsWith(query);
      }
    });

    setPokemon(temp);
  }

  return (
    <div>
      <div className={styles.toggleGroup}>
        <ToggleButtonGroup>
          <ToggleButton value="all">
            <Link to="/" style={{ textDecoration: 'none' }}>All</Link>
          </ToggleButton>
          <ToggleButton value="bag">
            <Link to="/bag" style={{ textDecoration: 'none' }}>Bag</Link>
          </ToggleButton>
        </ToggleButtonGroup>
        <div className={styles.form}>
          <input
            className={styles.input}
            type="text"
            id="header-search"
            placeholder="Search"
            name="s"
            value={query}
            onChange={(e) => handleKeyPress(e)}
          />
          <button onClick={() => filterPokemon()}>
            search
          </button>
          </div>
      </div>

      <div className={styles.container}>
        {pokemon.map((value, i) => (
          <div className={styles.item} key={i}>
            <button
              className={styles.button}
              onClick={() => handleOnClickPokemon(value.data.name, value.data)}
            >
                <img src={value.data.sprites.front_default} alt="" />
            </button>
            <div className={styles.text}>{value.data.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

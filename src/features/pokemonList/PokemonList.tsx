import React from 'react';
import styles from './PokemonList.module.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchPokemon, selectPokemon } from './pokemonListSlice';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export function PokemonList() {
  const allPokemon = useAppSelector(selectPokemon);
  const dispatch = useAppDispatch();

  const [pokemon, setPokemon] = React.useState(allPokemon);
  const [toggle, setToggle] = React.useState('all');
  const [query, setQuery] = React.useState('');

  // runs on page load and on changes
  useEffect(() => {
    if (pokemon.length === 0 && allPokemon.length === 0) {
      dispatch(fetchPokemon());
    } else if (pokemon.length === 0 && query === '' && allPokemon.length > 0) {
      setPokemon(allPokemon);
    }
  }, [dispatch, allPokemon, pokemon.length, query]);

  const history = useHistory();

  const handleOnClickPokemon = (id: number, singlePokemon: any) => {
    history.push(
        `details/${id}`, singlePokemon
    )
  };

  // updates query when user types
  const handleKeyPress = (event: any) => {
    setQuery(event.target.value);
  }

  const handleToggle = (val: string) => {
    switch (val) {
      case 'all':
        setPokemon(allPokemon);
        setToggle('all');
        break;
      case 'bag':
        setPokemon(allPokemon.slice(0,5));
        setToggle('bag');
        break;
      default:
        setPokemon(allPokemon);
        setToggle('all');
        break;
    }
  }

  // filter pokemon based on user's search
  const filterPokemon = () => {
    // pokemon would be bag pokemon
    const temp = (toggle === 'all' ? allPokemon : pokemon).filter((value) => {
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
        <ToggleButtonGroup exclusive>
          <ToggleButton value="all" onClick={() => handleToggle("all")}>
            All
          </ToggleButton>
          <ToggleButton value="bag" onClick={() => handleToggle("bag")}>
            Bag
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
              onClick={() => handleOnClickPokemon(value.data.id, value.data)}
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

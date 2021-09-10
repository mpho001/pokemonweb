import React from 'react';

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './PokemonList.module.css';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchPokemon, selectPokemon } from './pokemonListSlice';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export function PokemonList() {
  const pokemon = useAppSelector(selectPokemon);
  const dispatch = useAppDispatch();

  useEffect(() => {
      dispatch(fetchPokemon());
  }, [dispatch]);

  const history = useHistory();

  const handleOnClick = (name: string, pokemon: any) => {
    history.push(
        `details/${name}`, pokemon
    )
  };

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
      </div>  
      <div className={styles.container}>
        {pokemon.map((value) => (
          <div className={styles.item}>
            <button className={styles.button} onClick={() => handleOnClick(value.data.name, value.data)}>
                <img src={value.data.sprites.front_default} alt="" />
            </button>
            <div>{value.data.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

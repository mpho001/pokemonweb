/// import React, { useState } from 'react';

import styles from '../pokemonList/PokemonList.module.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Link } from 'react-router-dom';

export function PokemonBag() {
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
    </div>
  );
}

/// import React, { useState } from 'react';

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from '../counter/Counter.module.css';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { Counter } from '../counter/Counter';

export function PokemonList() {
//   const count = useAppSelector(selectCount);
//   const dispatch = useAppDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>Pokemon List</span>
      </div>
    </div>
  );
}

import React from 'react';

// import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from '../counter/Counter.module.css';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { Counter } from '../counter/Counter';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchPokemon, selectPokemon } from './pokemonListSlice';
import { useEffect } from 'react';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export function PokemonList() {
//   const count = useAppSelector(selectCount);
//   const dispatch = useAppDispatch();
//   const [incrementAmount, setIncrementAmount] = useState('2');

//   const incrementValue = Number(incrementAmount) || 0;

  // const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const pokemon = useAppSelector(selectPokemon);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  useEffect(() => {
      console.log('done');
      dispatch(fetchPokemon());
  }, [dispatch]);

  const history = useHistory();
  // const handleOnClick = React.useCallback(() => history.push('/details'), [history]);

  // const handleOnClick = (name: string) => history.push(`details/${name}`, {});
  const handleOnClick = (name: string, pokemon: any) => {
    history.push(
        `details/${name}`, pokemon
    )
  };

//   return (
//     <div>
//       <div className={styles.row}>
//         <span className={styles.value}>Pokemon List</span>
//             {
//                 Object.keys(pokemon).map((obj, i) => {
//                     return (
//                       <div>
//                         {/* {pokemon[i].data.name} */}
//                         <img src={pokemon[i].data.sprites.front_default} alt="">
//                         </img>
//                         <br />
//                       </div>
//                     )
//                 })
//             }
//       </div>
//     </div>
//   );

  return (
    <div>
      <Grid container className={classes.root}>
      <ToggleButtonGroup>
        <ToggleButton value="all">
          <Link to="/" style={{ textDecoration: 'none' }}>All</Link>
        </ToggleButton>
        <ToggleButton value="bag">
          <Link to="/bag" style={{ textDecoration: 'none' }}>Bag</Link>
        </ToggleButton>
      </ToggleButtonGroup>
        <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={10}>
            {pokemon.map((value) => (
                <Grid key={value.data.name} item>
                    <button onClick={() => handleOnClick(value.data.name, value.data)}>
                    <img src={value.data.sprites.front_default} alt="" />
                    </button>
                    <div>{value.data.name}</div>
                </Grid>
            ))}
            </Grid>
        </Grid>
          </Grid>
       </div>
  )
}

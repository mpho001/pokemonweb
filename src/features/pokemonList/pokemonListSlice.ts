import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
const axios = require('axios').default;

// import { fetchCount } from './counterAPI';

const url = 'https://pokeapi.co/api/v2/';

export interface Pokemon {
  name: string,
  url: string
}

export interface PokemonListState {
  status: 'idle' | 'loading' | 'failed';
  // pokemon: Pokemon[];
  pokemon: any[];
  value: number;
}

const initialState: PokemonListState = {
  status: 'idle',
  pokemon: [],
  value: 0
};

export function fetchPokemonCall() {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(function (response: any) {
      // handle success
      // console.log(response);
      // console.log('success');
    })
    .catch(function (error: any) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}


// export const fetchPokemon = createAsyncThunk(
//   'pokemonList/fetchPokemon',
//   // TODO: pass in string as argument for searching
//   // TODO: get each pokemon list after
//   () => {
//     // WORKING
//     return axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
//   }
// );

// export const pokemonListSlice = createSlice({
//   name: 'pokemonList',
//   initialState,
//   // The `reducers` field lets us define reducers and generate associated actions
//   reducers: {},
//   // The `extraReducers` field lets the slice handle actions defined elsewhere,
//   // including actions generated by createAsyncThunk or in other slices.
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchPokemon.pending, (state) => {
//         console.log('other case?');
//         state.status = 'loading';
//       })
//       .addCase(fetchPokemon.fulfilled, (state, { payload }) => {
//         console.log('case hit');
//         state.status = 'idle';
//         state.value = 2;
//         state.pokemon = [ ...payload.data.results ];
//         console.log(payload.data.results);
//       });
//   },
// });

export const fetchPokemon = createAsyncThunk(
  'pokemonList/fetchPokemon',
  // TODO: pass in string as argument for searching
  async () => {
    const simplePokemon = await axios.get(`${url}pokemon?limit=151`);
    const pokemonWithData: any[] = [];

    const results = simplePokemon.data.results;
    for (let i = 0; i < results.length; i++) {
      const pokemonFull = await axios.get(results[i].url);
      pokemonWithData.push(pokemonFull);
    }

    return pokemonWithData;
  }
);

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemon.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.value = 2;
        state.pokemon = [ ...payload ];
      });
  },
});

// export const { increment, decrement, incrementByAmount } = pokemonListSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectPokemon = (state: RootState) => state.pokemonList.pokemon;

export default pokemonListSlice.reducer;
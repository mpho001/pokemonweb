import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
const axios = require('axios').default;

const url = 'https://pokeapi.co/api/v2/';

export interface Pokemon {
  name: string,
  url: string
}

interface Page {
  pageNumber: number,
  limit: number
}

export interface PokemonListState {
  pokemon: any[];
}

const initialState: PokemonListState = {
  pokemon: [],
};

export const fetchPokemon = createAsyncThunk(
  'pokemonList/fetchPokemon',
  async () => {
    // limit = 10, pageNumber = 1, return 1-10
    // limit = 10, pageNumber = 2, return 11-20
    // const endRange = limit * pageNumber;
    // const startRange = endRange - limit;
    // console.log(endRange);
    // console.log(startRange);

    const simplePokemon = await axios.get(`${url}pokemon?limit=151`);
    const pokemonWithData: any[] = [];

    const results = simplePokemon.data.results;

    const requests = [];
    for (let i = 0; i < results.length; i++) {
      // const pokemonFull = await axios.get(results[i].url);
      const pokemonFull = axios.get(results[i].url);
      requests.push(pokemonFull);
      // pokemonWithData.push(pokemonFull);
    }

    await axios.all(requests).then(axios.spread(function (...res: any) {
      // console.log(res);
      res.forEach((item: any) => {
        pokemonWithData.push(item);
      })
    }))

    return pokemonWithData;
  }
);

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.fulfilled, (state, { payload }) => {
        state.pokemon = [ ...payload ];
      });
  },
});

export const selectPokemon = (state: RootState) => state.pokemonList.pokemon;

export default pokemonListSlice.reducer;

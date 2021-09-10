import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
const axios = require('axios').default;

const url = 'https://pokeapi.co/api/v2/';

export interface Pokemon {
  name: string,
  url: string
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

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
const axios = require('axios').default;

const url = 'https://api.craft-demo.net/pokemon';

export interface Pokemon {
  locations: string[]
}

export interface PokemonDetails {
  status: 'idle' | 'loading' | 'failed';
  locations: string[]
}

const initialState: PokemonDetails = {
  status: 'idle',
  locations: []
};

export const fetchLocations = createAsyncThunk(
  'pokemonDetails/fetchLocations',
  async (id: number) => {
    const config = {
        headers: {
            'x-api-key': `${process.env.POKEMON_API_KEY}`
        }
    };

    const locations = await axios.get(`${url}/${id}`, config);
    return locations;
  }
);

export const pokemonDetailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocations.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.locations = [ ...payload ];
      });
  },
});

export const selectLocations = (state: RootState) => state.pokemonDetails.locations;

export default pokemonDetailsSlice.reducer;

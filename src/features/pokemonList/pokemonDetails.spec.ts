import pokemonListReducer, {
  PokemonListState
} from './pokemonListSlice';

describe('pokemon list reducer', () => {
  const initialState: PokemonListState = {
    pokemon: [],
    status: 'idle'
  };
  it('should handle initial state', () => {
    expect(pokemonListReducer(undefined, { type: 'unknown' })).toEqual({
      pokemon: [],
      status: 'idle'
    });
  });
  // test fetchPokemon
});
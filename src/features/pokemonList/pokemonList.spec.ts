import pokemonListReducer, {
  PokemonListState
} from './pokemonListSlice';

describe('pokemon list reducer', () => {
  const initialState: PokemonListState = {
    pokemon: []
  };
  it('should handle initial state', () => {
    expect(pokemonListReducer(undefined, { type: 'unknown' })).toEqual({
      pokemon: []
    });
  });
  // test fetchPokemon
});

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pokemonListReducer from '../features/pokemonList/pokemonListSlice';
import pokemonDetailsReducer from '../features/pokemonDetails/pokemonDetailsSlice';

export const store = configureStore({
  reducer: {
    pokemonList: pokemonListReducer,
    pokemonDetails: pokemonDetailsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

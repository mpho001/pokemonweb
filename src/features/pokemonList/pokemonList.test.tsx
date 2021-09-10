import React from 'react';
import enzyme from '../../enzyme';
import { PokemonList } from './PokemonList';
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([thunk])

describe('When loading PokemonList', () => {
  it('it renders image buttons', () => {
    const store = mockStore({
      startup: { complete: false }
    });

    const wrapper: any = enzyme.shallow(<Provider store={store}> <PokemonList /> </Provider>);
    expect(wrapper.find('.item')).toHaveLength(0);
  });

  describe('When clicking a pokemon', () => {
    it('takes you to the Pokemon Details page', () => {

    });
  })

  describe('When typing in the search box', () => {
    it('updates the query in the state', () => {
      
    });
  });
});
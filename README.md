# Pokemon

## To run locally
- Git clone the project
- Run `npm install` at the root of the project
- Create a `.env` file at the root of the project
- You will need the following keys: `POKEMON_API_KEY` and `GOOGLE_MAPS_API_KEY`
- Run npm `run webpack-serve`
- Navigate to http://localhost:8080/
- To run tests: `npm run test`

## Libraries Used
- Typescript
- Redux
- Webpack
- Babel

## Navigating the Application
The application is broken up into different features, which includes PokemonList, PokemonDetails, and GoogleMaps.
When first launching the application, you will see the PokemonList page where you can toggle between an All Pokemon view and a Bag view. When clicking a pokemon, it will take you to the PokemonDetails page.

## TODOs
- Write tests for components and reducers
- Fix useState bug in PokemonList component
- Optimize requests to PokeApi
- Implement saving pokemon to Bag
- Get locations from craft demo api and pass to GoogleMaps
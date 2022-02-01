import React from 'react';
import { ShowPokemonLayout } from './style';

function ShowPokemon({ AppState }) {
  console.log(AppState);
  return (
    <ShowPokemonLayout>
      {'ShowPokemon'}
      {AppState.state.actualPokemon.name.english}
    </ShowPokemonLayout>
  );
}

export default ShowPokemon;

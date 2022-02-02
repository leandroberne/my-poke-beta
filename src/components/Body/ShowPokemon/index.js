import React from 'react';
import { ShowPokemonLayout } from './style';
import Button from '@material-ui/core/Button';

function ShowPokemon({ AppState }) {
  const { actualPokemon } = AppState.state;
  console.log(actualPokemon);
  let zeros = '';
  if (actualPokemon.id <= 9) {
    zeros = '00';
  } else if (actualPokemon.id <= 99) {
    zeros = 0;
  }
  return (
    <ShowPokemonLayout>
      <h1>{actualPokemon.name.english}</h1>
      <img
        src={
          window.location.origin +
          '/imagenes/' +
          zeros +
          actualPokemon.id +
          '.png'
        }
        alt='Pokemon'
      />
      <p>
        <strong>Ataque:</strong> {actualPokemon.base.Attack}
      </p>
      <p>
        <strong>Defensa:</strong> {actualPokemon.base.Defense}
      </p>
      <p>
        <strong>HP:</strong> {actualPokemon.base.HP}
      </p>
      <p>
        <strong>Velocidad:</strong> {actualPokemon.base.Speed}
      </p>
      <p>
        <strong>Tipo:</strong> {actualPokemon.type[0]}
      </p>
      <p>
        <strong>Nombre en Japonés:</strong> {actualPokemon.name.japanese}
      </p>
      <Button href='/' variant='contained' color='primary'>
        ATRAS
      </Button>
    </ShowPokemonLayout>
  );
}

export default ShowPokemon;

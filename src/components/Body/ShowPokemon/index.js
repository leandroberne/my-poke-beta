import React from 'react';
import { ShowPokemonLayout, FillerDiv } from './style';
import Button from '@material-ui/core/Button';

function ShowPokemon({ AppState }) {
  const { actualPokemon, attributes } = AppState.state;

  let zeros = '';
  let pId = '';
  let arrayId = actualPokemon.url.split('');

  if (arrayId.length === 36) {
    zeros = '00';
    pId = `${arrayId[34]}`;
  } else if (arrayId.length === 37) {
    zeros = 0;
    pId = `${arrayId[34]}${arrayId[35]}`;
  } else {
    pId = `${arrayId[34]}${arrayId[35]}${arrayId[36]}`;
  }

  const urlImage = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/`;

  return (
    <ShowPokemonLayout>
      <h1>{actualPokemon.name}</h1>
      <img src={urlImage + zeros + pId + '.png'} alt='Pokemon' />
      <h2>Habilidades:</h2>
      {attributes.abilities.map((element, index) => {
        return <p key={index}>- {element.ability.name}</p>;
      })}
      <h2>Experiencia base</h2>
      <p>- {attributes.base_experience} puntos</p>
      <h2>Altura</h2>
      <p>- {attributes.height} mts</p>
      <h2>Peso</h2>
      <p>- {attributes.weight} kg</p>
      <Button href='/' variant='contained' color='primary'>
        ATRAS
      </Button>
      <FillerDiv></FillerDiv>
    </ShowPokemonLayout>
  );
}

export default ShowPokemon;

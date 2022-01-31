import React from 'react';
import { CardContainerLayout } from './style';
import CardItem from '../CardItem';
import { pokemonList } from '../../../assets/pokedex';

function CardContainer() {
  return (
    <CardContainerLayout>
      {pokemonList.map((pokemon, index) => {
        return <CardItem key={pokemon.id} pokemon={pokemon}></CardItem>;
      })}
    </CardContainerLayout>
  );
}

export default CardContainer;
//><

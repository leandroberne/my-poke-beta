import React from 'react';
import { CardContainerLayout } from './style';
import CardItem from '../CardItem';
import { pokemonList } from '../../../assets/pokedex';

function CardContainer() {
  return (
    <CardContainerLayout>
      {pokemonList.map((pokemon, index) => {
        const srcImg = '../../../assets/pokemon.json/images/002.png';
        return (
          <CardItem
            key={pokemon.id}
            pokemon={pokemon}
            imagen={srcImg}
          ></CardItem>
        );
      })}
    </CardContainerLayout>
  );
}

export default CardContainer;
//><

import React from 'react';
import { CardContainerLayout } from './style';
import CardItem from '../CardItem';
import { pokemonList } from '../../../assets/pokedex';
import { useNavigate } from 'react-router-dom';

function CardContainer({ AppState }) {
  const navigateApp = useNavigate();

  const handleClick = (pokemon) => {
    AppState.setState({
      ...AppState.state,
      actualPokemon: pokemon,
      listPokemon: pokemonList,
    });
    navigateApp('/ShowPokemon');
  };

  return (
    <CardContainerLayout>
      {pokemonList.map((pokemon, index) => {
        return (
          <CardItem
            key={index}
            pokemon={pokemon}
            hacerClick={handleClick}
          ></CardItem>
        );
      })}
    </CardContainerLayout>
  );
}

export default CardContainer;
//><

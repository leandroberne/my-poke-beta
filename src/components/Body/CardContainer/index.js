import React, { useEffect, useState } from 'react';
import { CardContainerLayout } from './style';
import CardItem from '../CardItem';
import { useNavigate } from 'react-router-dom';
import Search from '../Search';
import Navigator from '../Navigator';
import axios from 'axios';

function CardContainer({ AppState }) {
  const [mainState, setMainState] = useState({
    listPokemon: [],
    spinner: true,
  });

  const [searchState, setSearchState] = useState({
    flag: false,
    name: '',
  });

  const [actualPage, setActualPage] = useState(0);

  useEffect(() => {
    if (mainState.listPokemon.length === 0) {
      axios({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
        method: 'GET',
        data: {},
      })
        .then((res) => {
          setMainState({
            spinner: false,
            listPokemon: res.data.results,
          });
        })
        .catch((err) => {
          if (err.response.status === 404) {
            alert('Error al consultar el Endpoint');
          }
        });
    }
  }, [mainState]);

  const navigateApp = useNavigate();

  const handleClick = (pokemon) => {
    axios({
      url: `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
      method: 'GET',
      data: {},
    })
      .then((res) => {
        AppState.setState({
          ...AppState.state,
          actualPokemon: pokemon,
          listPokemon: mainState.listPokemon,
          attributes: res.data,
        });
        navigateApp('/ShowPokemon');
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert('Error al consultar el Endpoint');
        }
      });
  };

  const pokePagination = () => {
    return mainState.listPokemon.slice(actualPage, actualPage + 9);
  };

  const nextPage = () => {
    setActualPage(actualPage + 9);
  };

  const prevPage = () => {
    if (actualPage > 0) {
      setActualPage(actualPage - 9);
    }
  };

  return (
    <>
      <Search setSearchState={setSearchState}></Search>
      <CardContainerLayout>
        {mainState.spinner && 'Cargando..'}
        {/* {!searchState.flag
          ? mainState.listPokemon.map((pokemon, index) => {
              return (
                <CardItem
                  key={index}
                  pokemon={pokemon}
                  hacerClick={handleClick}
                ></CardItem>
              );
            })
          : mainState.listPokemon
              .filter((element) => element.name.includes(searchState.name))
              .map((pokemon, index) => {
                return (
                  <CardItem
                    key={index}
                    pokemon={pokemon}
                    hacerClick={handleClick}
                  ></CardItem>
                );
              })} */}
        {!searchState.flag
          ? pokePagination().map((pokemon, index) => {
              return (
                <CardItem
                  key={index}
                  pokemon={pokemon}
                  hacerClick={handleClick}
                ></CardItem>
              );
            })
          : mainState.listPokemon
              .filter((element) => element.name.includes(searchState.name))
              .map((pokemon, index) => {
                return (
                  <CardItem
                    key={index}
                    pokemon={pokemon}
                    hacerClick={handleClick}
                  ></CardItem>
                );
              })}
        <button onClick={prevPage}>Anteriores</button>
        <button onClick={nextPage}>Siguientes</button>
      </CardContainerLayout>
      <Navigator></Navigator>
    </>
  );
}

export default CardContainer;
//><

import React, { useState } from 'react';
import { BodyLayout } from './style';
import Search from './Search';
import CardContainer from './CardContainer';
import Navigator from './Navigator';
import ShowPokemon from '../ShowPokemon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Body() {
  const [appState, setAppState] = useState({
    actualPokemon: null,
    listPokemon: [],
  });

  const controllerAppState = { state: appState, setState: setAppState };
  return (
    <BodyLayout>
      <Search></Search>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <CardContainer AppState={controllerAppState}></CardContainer>
            }
          ></Route>
          <Route
            path='/ShowPokemon'
            element={<ShowPokemon AppState={controllerAppState}></ShowPokemon>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Navigator></Navigator>
    </BodyLayout>
  );
}

export default Body;

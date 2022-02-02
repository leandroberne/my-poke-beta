import React, { useState } from 'react';
import { BodyLayout } from './style';
import CardContainer from './CardContainer';
import ShowPokemon from './ShowPokemon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Body() {
  const [appState, setAppState] = useState({
    actualPokemon: null,
    listPokemon: [],
  });

  const controllerAppState = { state: appState, setState: setAppState };
  return (
    <BodyLayout>
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
    </BodyLayout>
  );
}

export default Body;

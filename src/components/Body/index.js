import React from 'react';
import { BodyLayout } from './style';
import Search from './Search';
import CardContainer from './CardContainer';
import Navigator from './Navigator';

function Body() {
  return (
    <BodyLayout>
      <Search></Search>
      <CardContainer></CardContainer>
      <Navigator></Navigator>
    </BodyLayout>
  );
}

export default Body;

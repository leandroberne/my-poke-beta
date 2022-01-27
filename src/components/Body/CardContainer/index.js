import React from 'react';
import { CardContainerLayout } from './style';
import CardItem from '../CardItem';

function CardContainer() {
  return (
    <CardContainerLayout>
      <CardItem></CardItem>
      <CardItem></CardItem>
      <CardItem></CardItem>
      <CardItem></CardItem>
      <CardItem></CardItem>
      <CardItem></CardItem>
    </CardContainerLayout>
  );
}

export default CardContainer;

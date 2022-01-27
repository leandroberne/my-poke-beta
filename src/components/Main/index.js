import React from 'react';
import { MainLayout } from './style';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

function Main() {
  return (
    <MainLayout>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </MainLayout>
  );
}

export default Main;

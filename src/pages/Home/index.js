import React from 'react';
import {Container} from './style';

import Trailers from '../../components/TrailersCards';
import Header from '../../components/Header';

const Home = () => {
  return (
    <Container>
      <Header />
      <Trailers />
    </Container>
  );
};

export default Home;

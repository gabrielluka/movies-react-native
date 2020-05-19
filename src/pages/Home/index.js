import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from './style';
import Trailers from '../../components/TrailersCards';
import Header from '../../components/Header';
import HandlerNotification from '../../services/notification';
import MoviesList from '../../components/Movies';

const Home = () => {
  const loading = HandlerNotification();
  if (loading) {
    return <ActivityIndicator size="large" style={{flex: 1}} />;
  }

  return (
    <Container>
      <Header />
      <Trailers />
      <MoviesList title="Terror" />
      <MoviesList title="Action" />
    </Container>
  );
};

export default Home;

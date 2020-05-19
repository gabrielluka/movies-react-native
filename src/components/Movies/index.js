import React from 'react';
import {
  MovieCard,
  Poster,
  ListScroll,
  TextHeaderList,
  Container,
} from './style';

const ArrayMovie = [
  {
    img: require('../../assets/imgs/1917.jpg'),
  },
  {
    img: require('../../assets/imgs/fahim.jpg'),
  },
  {
    img: require('../../assets/imgs/frankie.jpg'),
  },
  {
    img: require('../../assets/imgs/hiddenlife.jpg'),
  },
  {
    img: require('../../assets/imgs/rabbit.jpg'),
  },
];

const MoviesList = (props) => {
  return (
    <Container>
      <TextHeaderList>{props.title}</TextHeaderList>
      <ListScroll horizontal>
        {ArrayMovie.map((movie, index) => {
          return (
            <MovieCard key={String(index)}>
              <Poster resizeMode="cover" source={movie.img} />
            </MovieCard>
          );
        })}
      </ListScroll>
    </Container>
  );
};

export default MoviesList;

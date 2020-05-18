import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  TextHeaderList,
  ScrollView,
  MovieCard,
  PlayIcon,
  ContentIcon,
} from './style';

const playIcon = require('../../assets/icons/play-button.png');

const dataMovies = [
  {
    img: require('../../assets/imgs/sw7.jpg'),
    idMovie: 'sGbxmsDFVnE',
  },
  {
    img: require('../../assets/imgs/card-pantera-negra.jpg'),
    idMovie: 'wL4a4MafSjQ',
  },
  {
    img: require('../../assets/imgs/card-vingadores.jpg'),
    idMovie: 'g6ng8iy-l0U',
  },
];

const Movies = (props) => {
  const navigation = useNavigation();

  return props.movieList.map((movie, index) => {
    return (
      <View key={index}>
        <MovieCard resizeMode="cover" source={movie.img} />
        <ContentIcon>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate('WatchTrailer', {infoMovie: movie});
            }}>
            <PlayIcon source={playIcon} />
          </TouchableOpacity>
        </ContentIcon>
      </View>
    );
  });
};

const Trailers = (props) => {
  return (
    <View>
      <TextHeaderList>Trailers</TextHeaderList>
      <ScrollView horizontal>
        <Movies movieList={dataMovies} />
      </ScrollView>
    </View>
  );
};

export default Trailers;

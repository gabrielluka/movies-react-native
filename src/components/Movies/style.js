import {Dimensions} from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  padding: 20px 0;
`;

const TextHeaderList = styled.Text`
  color: #545454;
  font-size: 18px;
  margin: 10px 0px 0px 20px;
  font-weight: bold;
`;
const ListScroll = styled.ScrollView`
  /* padding-left: 10px; */
  margin: 10px 0px 0px 10px;
`;

const Poster = styled.Image`
  width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
  height: 150px;
  border-radius: 5px;
  margin: 5px 0px 0px 10px;
`;

const MovieCard = styled.View`
  padding-right: 9px;
`;

export {MovieCard, Poster, ListScroll, TextHeaderList, Container};

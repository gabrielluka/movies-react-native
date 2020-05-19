import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const TextHeaderList = styled.Text`
  font-size: 18px;
  margin: 10px 0px 0px 20px;
  font-weight: bold;
  color: #545454;
`;

const ScrollView = styled.ScrollView`
  margin: 10px 10px 0px 10px;
  width: 100%;
  height: 220px;
`;

const MovieCard = styled.Image`
  margin: 10px;
  width: ${Math.round((Dimensions.get('window').width * 80) / 100)}px;
  height: 180px;
`;

const PlayIcon = styled.Image`
  width: 60px;
  height: 60px;
`;

const ContentIcon = styled.View`
  align-self: flex-end;
  bottom: 60px;
  margin: 0px 5px 0px 0px;
`;

export {ScrollView, MovieCard, TextHeaderList, PlayIcon, ContentIcon};

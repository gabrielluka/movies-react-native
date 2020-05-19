import React, {useState, useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {Container} from './style';

import Trailers from '../../components/TrailersCards';
import Header from '../../components/Header';

const Home = (props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      if (remoteMessage) {
        navigation.navigate(remoteMessage.data.route, {
          infoMovie: {idMovie: remoteMessage.data.idMovie},
        });
      }
      setLoading(false);
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          navigation.navigate(remoteMessage.data.route, {
            infoMovie: {idMovie: remoteMessage.data.idMovie},
          });
        }
        setLoading(false);
      });

    return () => {
      console.log('teste');
    };
  }, [navigation]);

  if (loading) {
    return <ActivityIndicator size="large" style={{flex: 1}} />;
  }

  return (
    <Container>
      <Header />
      <Trailers />
    </Container>
  );
};

export default Home;

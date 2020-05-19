import {useState, useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';

const HandlerNotification = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

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
      console.log('exit');
    };
  }, [navigation]);
  return loading;
};
export default HandlerNotification;

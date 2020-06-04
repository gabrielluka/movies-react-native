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
      setTimeout(()=> {
        setLoading(false);
      },1500)
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          navigation.navigate(remoteMessage.data.route, {
            infoMovie: {idMovie: remoteMessage.data.idMovie},
          });
        }
        setTimeout(()=> {
          setLoading(false);
        },1500)
      });
    return () => {
      console.log('exit');
    };
  }, [navigation]);

  return loading;
};
export default HandlerNotification;

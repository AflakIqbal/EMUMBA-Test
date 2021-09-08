import * as React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Spinner from '../utils/Spinner';
import styles from '../styles/styles';

import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

function HomeScreen({navigation, route}) {
  const [Latitude, setLatitude] = React.useState();
  const [Longitude, setLongitude] = React.useState();
  const [showLoader, setShowLoader] = React.useState(false);

  React.useEffect(() => {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    });
    const {latitude, longitude} = route.params;
    setLatitude(latitude);
    setLongitude(longitude);
  }, []);

  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setLongitude(location && location.longitude);
        setLatitude(location && location.latitude);
        setShowLoader(false);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  return (
    <SafeAreaView style={styles.SafeView}>
      <Spinner showLoader={showLoader} spinnerText={''} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setShowLoader(true);
          getLocation();
        }}>
        <Text style={styles.actionButtonTextStyle}>Where i AM?</Text>
      </TouchableOpacity>
      <MapView
        style={localStyles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: Latitude,
          longitude: Longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}>
        <Marker
          coordinate={{
            latitude: Latitude,
            longitude: Longitude,
          }}
        />
      </MapView>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: moderateScale(10),
  },
});
export default HomeScreen;

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

import {PRIMARYCOLOR} from '../styles/colors';

import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
function HomeScreen({navigation, route}) {
  const [Latitude, setLatitude] = React.useState();
  const [Longitude, setLongitude] = React.useState();

  React.useEffect(() => {
    // getPermissions = () => {
    //   RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    //     interval: 10000,
    //     fastInterval: 5000,
    //   }).then(data => {
    //     if (data === 'already-enabled') {
    //       this.findCoordinates();
    //     } else {
    //       setTimeout(() => {
    //         this.findCoordinates();
    //       }, 1000);
    //     }
    //   });
    // };
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
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white',
      }}>
      {/* <TouchableOpacity
        style={{
          zIndex: 10,
          alignSelf: 'flex-end',
          marginRight: scale(5),
          width: '50%',

          height: verticalScale(50),
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderRadius: moderateScale(12),
          borderColor: PRIMARYCOLOR,
          backgroundColor: PRIMARYCOLOR,
          marginBottom: moderateScale(15),
        }}
        onPress={() => {
          getLocation();
        }}>
        <Text style={localStyles.actionButtonTextStyle}>Where i AM?</Text>
      </TouchableOpacity> */}
      <MapView
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 12,
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: moderateScale(10),
        }}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: Latitude,
          longitude: Longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}>
        <View style={{bottom: 50, position: 'absolute'}}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              marginRight: scale(5),
              width: '50%',
              height: verticalScale(50),
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: moderateScale(12),
              borderColor: PRIMARYCOLOR,
              backgroundColor: PRIMARYCOLOR,
              marginBottom: moderateScale(15),
            }}
            onPress={() => {
              getLocation();
            }}>
            <Text style={localStyles.actionButtonTextStyle}>Where i AM?</Text>
          </TouchableOpacity>
        </View>
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
  actionButtonTextStyle: {
    fontSize: moderateScale(15),
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },
  textInputStyle: {
    height: moderateScale(25),
    width: '90%',
    padding: 0,
    paddingHorizontal: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: moderateScale(18),
    margin: 0,
    borderWidth: 0,
    color: PRIMARYCOLOR,
    textAlignVertical: 'center',
  },
  buttonContainer: {
    height: moderateScale(40),
    width: '100%',
    backgroundColor: PRIMARYCOLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(12),
    marginBottom: moderateScale(20),
  },
  buttonTextStyle: {
    fontSize: moderateScale(13),
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },
});
export default HomeScreen;

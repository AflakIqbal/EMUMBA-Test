import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Modal,
} from 'react-native';

import Spinner from 'react-native-spinkit';

//Importing Actions to call Apis
import {moderateScale, verticalScale, scale} from 'react-native-size-matters';

//import {styles} from '_styles/styles';
import {PRIMARYCOLOR, WHITETEXTCOLOR} from '../styles/colors';

// This is a basic functional(Component) starting point for a screen

const Component = ({showLoader, spinnerText}) => {
  //This Callback is equilant of componentDidMount
  React.useEffect(() => {
    //This Hooks will perform as componentDidMount

    return () => {
      //this will perform as a component will unmount
      //This will be used for clean up purpose when components unmounts
    };
  }, []);

  return (
    <>
      <Modal animationType={'none'} transparent={true} visible={showLoader}>
        <View
          style={{
            backgroundColor: '#000',
            opacity: 0.7,
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{opacity: 1}}>
            <Spinner
              style={{
                marginTop: moderateScale(40),
              }}
              isVisible={showLoader}
              size={100}
              type={'Pulse'}
              color={PRIMARYCOLOR}
            />
          </View>
          <View>
            <Text
              allowFontScaling={false}
              style={{color: PRIMARYCOLOR, marginTop: 30, fontSize: 24}}>
              {spinnerText}
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
};

const screenStyles = StyleSheet.create({
  signInButton: {
    height: 40,
    borderRadius: 20,
    //marginLeft: 20,
    //marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Component;

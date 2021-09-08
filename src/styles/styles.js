//Generaric Style Sheets for app
import {StyleSheet} from 'react-native';
import {
  PRIMARYCOLOR,
  REDTEXTCOLOR,
  GREENTEXTCOLOR,
  BLACKTEXTCOLOR,
  WHITETEXTCOLOR,
} from './colors';

import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

export default StyleSheet.create({
  Header: {
    color: PRIMARYCOLOR,
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },

  textMedium: {
    fontSize: moderateScale(16),
    color: WHITETEXTCOLOR,
    fontFamily: 'Montserrat-Medium',
  },
  actionButtonTextStyle: {
    fontSize: moderateScale(15),
    color: WHITETEXTCOLOR,
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
    color: WHITETEXTCOLOR,
    fontFamily: 'Montserrat-Medium',
  },
  imgBck: {
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    borderRadius: 5,
    height: verticalScale(200),
    width: scale(120),
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderRadius: moderateScale(12),
  },
  actionButtonTextStyle: {
    fontSize: moderateScale(15),
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },

  buttonTextStyle: {
    fontSize: moderateScale(13),
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: moderateScale(10),
  },
  SafeView: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginTop: moderateScale(5),
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
  },
  SafeView: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginTop: moderateScale(5),
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
  },
  actionButtonTextStyle: {
    fontSize: moderateScale(15),
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },

  buttonTextStyle: {
    fontSize: moderateScale(13),
    color: 'white',
    fontFamily: 'Montserrat-Medium',
  },
});

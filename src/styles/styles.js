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
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITETEXTCOLOR,
  },
  Header: {
    color: PRIMARYCOLOR,
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
  },
  descriptionTextSize: {
    fontSize: moderateScale(15),
    color: BLACKTEXTCOLOR,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  textMedium: {
    fontSize: moderateScale(16),
    color: BLACKTEXTCOLOR,
    fontFamily: 'Montserrat-Medium',
  },
  headerTextMedium: {
    fontSize: moderateScale(20),
    color: PRIMARYCOLOR,
    fontFamily: 'Montserrat-Bold',
  },
  popupHeaderTextMedium : {
    fontSize: moderateScale(16),
    color: PRIMARYCOLOR,
    fontFamily: 'Montserrat-Medium',
  },
  buttonContainer: {
    height: moderateScale(40),
    width: '80%',
    backgroundColor: PRIMARYCOLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(12),
    marginBottom: moderateScale(20),
  },
  ErrorTextStyle: {
    color: '#ee3945',
    fontSize: 12,
    marginLeft: 30,
  },
  buttonTextStyle: {
    fontSize: moderateScale(16),
    color: WHITETEXTCOLOR,
    fontFamily: 'Montserrat-Medium',
  },
});

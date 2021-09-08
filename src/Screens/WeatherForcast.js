import * as React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  Card,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {LineChart} from 'react-native-line-chart';
import Spinner from '../utils/Spinner';
import SelectDropdown from 'react-native-select-dropdown';
import {PRIMARYCOLOR, WHITETEXTCOLOR} from '../styles/colors';
import styles from '../styles/styles';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import GetLocation from 'react-native-get-location';
import {
  verticalScale,
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
var axios = require('axios');
const City = require('../assests/pk-cities.json');

function HomeScreen({navigation}) {
  const [weekday, setWeekday] = React.useState([
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]);
  const [month, setMonth] = React.useState([
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ]);
  const [city, setCity] = React.useState(0);
  const [weather, setWeather] = React.useState(0);
  const [days, setDays] = React.useState();
  const [dates, setDates] = React.useState();
  const [searchCity, setSearchCity] = React.useState();
  const [Latitude, setLatitude] = React.useState();
  const [Longitude, setLongitude] = React.useState();
  const [showLoader, setShowLoader] = React.useState(false);
  const [CHART, setChart] = React.useState([0, 0, 0, 0, 0, 0, 0]);
  const [cities, setCities] = React.useState(
    City.map(city => {
      return city['city'];
    }),
  );

  function GetDays(startDate, daysToAdd) {
    var aryDates = [];
    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(weekday[currentDate.getDay()]);
    }
    return aryDates;
  }

  function GetDates(startDate, daysToAdd) {
    var aryDates = [];
    for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.setDate(startDate.getDate() + i);
      aryDates.push(
        currentDate.getDate() +
          '-' +
          month[currentDate.getMonth()] +
          '-' +
          currentDate.getFullYear(),
      );
    }
    return aryDates;
  }

  React.useEffect(() => {
    setShowLoader(true);
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    });
    getLocation();
    var startDate = new Date();
    var aryDates = GetDates(startDate, 7);
    var aryDays = GetDays(startDate, 7);
    console.log(aryDates);
    setDays(aryDays);
    setDates(aryDates);
  }, []);

  React.useEffect(() => {
    if (
      searchCity != null &&
      searchCity[0].lat != null &&
      searchCity[0].lng != null
    ) {
      setLongitude(parseInt(searchCity[0].lng));
      setLatitude(parseInt(searchCity[0].lat));
      AddTransaction(searchCity[0].lat, searchCity[0].lng);
    }
  }, [searchCity]);

  const MapScreen = () => {
    if (Latitude != null && Longitude != null) {
      navigation.navigate('Map View', {
        latitude: Latitude,
        longitude: Longitude,
      });
    }
  };

  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setLatitude(location && location.latitude);
        setLongitude(location && location.longitude);
        let Longitude = location && location.longitude;
        let Latitude = location && location.latitude;
        AddTransaction(Latitude, Longitude);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  const DailyForcast = ({item, index}) => (
    <ImageBackground
      style={styles.imgBck}
      imageStyle={{
        borderRadius: moderateScale(12),
      }}
      resizeMode="contain"
      source={require('../assests/images/cardBackground.jpg')}
      resizeMode="stretch">
      <Text style={([styles.textMedium], {color: 'white'})}>{days[index]}</Text>

      <Text style={[styles.textMedium, {fontSize: 15, color: 'white'}]}>
        {dates[index]}
      </Text>

      <Image
        style={{
          height: verticalScale(60),
          width: scale(60),
          borderRadius: moderateScale(12),
        }}
        source={{
          uri: `http://openweathermap.org/img/w/${
            item && item.weather && item.weather[0].icon
          }.png`,
        }}
        resizeMode="stretch"
      />
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.Header, {fontSize: scale(35), color: 'white'}]}>
          {Math.floor(item && item.temp && item.temp.day)}
        </Text>
        <Text style={[styles.Header, {fontSize: 10, color: 'white'}]}>o</Text>
        <Text style={[styles.Header, {fontSize: 35, color: 'white'}]}>C</Text>
      </View>
      <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{alignItems: 'center', width: '40%'}}>
          <Text style={[styles.Header, {fontSize: 10, color: 'white'}]}>
            Feel
          </Text>
          <View style={{flexDirection: 'row', marginTop: moderateScale(5)}}>
            <Text style={[styles.textMedium, {fontSize: 13, color: 'white'}]}>
              {Math.floor(item && item.feels_like && item.feels_like.day)}
            </Text>
            <Text
              style={[styles.textMedium, {fontSize: scale(7), color: 'white'}]}>
              {' '}
              o
            </Text>
            <Text style={[styles.textMedium, {fontSize: 13, color: 'white'}]}>
              C
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center', width: '60%'}}>
          <Text style={[styles.Header, {fontSize: 10, color: 'white'}]}>
            Description
          </Text>
          <Text
            style={[
              styles.textMedium,
              {fontSize: scale(11), color: 'white', marginTop: scale(5)},
            ]}>
            {item && item.weather && item.weather[0].description}
          </Text>
        </View>
      </View>
      {/* </View> */}
    </ImageBackground>
  );

  const AddTransaction = async (lat, lon) => {
    let latitude = parseInt(lat);
    let longitude = parseInt(lon);

    console.log(lat);
    console.log(latitude);

    axios({
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&units=metric&exclude=minutely,hourly&appid=e412fad76c3b89f0ef03077017bad5ec`,
      method: 'GET',
    })
      .then(result => {
        if (result && result.data && result.data.daily) {
          setWeather(result.data.daily);
          console.log('result,,,,', result.data.daily);
          setChart(
            result.data.daily.map(item => {
              return item.temp.day;
            }),
          );
          setShowLoader(false);
        } else {
          console.log('result................', result);
        }
      })
      .catch(error => {
        console.log('error....', error);
      });
  };

  console.log(cities, 'cities');

  return (
    <ScrollView style={{flex: 1, backgroundColor: WHITETEXTCOLOR}}>
      <SafeAreaView
        style={{
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Spinner showLoader={showLoader} spinnerText={''} />
        <SelectDropdown
          dropdownIconPosition={'right'}
          defaultButtonText={'Select City'}
          buttonStyle={{
            height: 50,
            width: '95%',
            backgroundColor: PRIMARYCOLOR,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            marginBottom: 20,
            marginTop: moderateVerticalScale(30),
          }}
          buttonTextStyle={{
            fontSize: 15,
            color: WHITETEXTCOLOR,
            fontFamily: 'Montserrat-Bold',
          }}
          data={cities}
          onSelect={(selectedItem, index) => {
            setShowLoader(true);
            console.log(selectedItem, index);
            setSearchCity(
              City.filter(city => {
                if (city['city'] === selectedItem) {
                  return city['lat'];
                }
              }),
            );
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            setCity(selectedItem);
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
        <FlatList
          data={weather}
          renderItem={DailyForcast}
          horizontal={true}
          keyExtractor={item => item.id}
        />
        <ScrollView horizontal={true}>
          <LineChart
            data={{
              labels: days,
              datasets: [
                {
                  data: CHART,
                },
              ],
            }}
            width={800} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: '#055CE9',
              backgroundGradientFrom: '#055CE9',
              backgroundGradientTo: '#ffa726',
              //decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            // bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              margin: 5,
              height: moderateScale(220),
            }}
          />
        </ScrollView>
        <TouchableOpacity
          style={{
            marginTop: 0,
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
            MapScreen();
          }}>
          <Text style={localStyles.actionButtonTextStyle}>
            View City on Map
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
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
});

export default HomeScreen;

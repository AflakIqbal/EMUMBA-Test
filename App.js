// In App.js in a new project

import * as React from 'react';
import {View, Text, Image, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/WeatherForcast';
import LoginScreen from './src/Screens/MapScreen';
const Stack = createNativeStackNavigator();
import {PRIMARYCOLOR} from './src/styles/colors';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather Forcast">
        <Stack.Screen
          name="Weather Forcast"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#f9f9f9',
            },
            headerTintColor: PRIMARYCOLOR,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Map View"
          component={LoginScreen}
          options={{
            headerStyle: {
              backgroundColor: '#f9f9f9',
            },
            headerTintColor: PRIMARYCOLOR,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function BottomTab() {
//   return (
//     <Tab.Navigator
//         mode="modal"
//         screenOptions={({route}) => ({
//           headerShown: false,

//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;

//             if (route.name === 'Management') {
//               iconName = focused ? 'ios-list-box' : 'ios-list-box';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list-box' : 'ios-list-box';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: PRIMARYCOLOR,
//           tabBarInactiveTintColor: 'gray',
//         })}
//         options={{tabBarBadge: 1}}>
//         <Tab.Screen name="Management" component={BottomTab} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//       </Tab.Navigator>
//       );
// }
export default App;

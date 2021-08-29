import * as React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Login Screen</Text>
      <Button
        title="Go to Details... again"
        // onPress={() =>
        //   navigation.setOptions({
        //     title: 'Updated!',
        //     headerStyle: {
        //       backgroundColor: '#00ff',
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //       fontWeight: 'bold',
        //     },
        //   })
        // }
      />
      <Text>Setting Screen</Text>
    </View>
  );
}

export default HomeScreen;

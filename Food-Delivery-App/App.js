import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from './startup';
import Location from './location';
import Restaurants from './restaurants';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Startup'>
        <Stack.Screen name="Welcome" component={Startup} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Restaurants Header" component={Restaurants} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

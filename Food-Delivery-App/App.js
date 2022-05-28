import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from './screens/startup';
import Location from './screens/location';
import Restaurants from './screens/restaurants';
import Login from './screens/login_signup';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Startup} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Restaurants Header" component={Restaurants} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

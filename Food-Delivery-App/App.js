import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from './screens/startup';
import Location from './screens/location';
import Restaurants from './screens/restaurants';
import Login from './screens/login_signup';
import ItemMenu from './screens/itemmenu';
import RestaurantItems from './components/restaurantItems';

const App = () => {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Startup} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="RestaurantsHeader" component={Restaurants} />
        <Stack.Screen name="Item Menu" component={ItemMenu} />
        <Stack.Screen name="RestaurantItems" component={RestaurantItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PropertyDetailScreen from './screens/PropertyDetailScreen';
import AddPropertyScreen from './screens/AddPropertyScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddProperty" component={AddPropertyScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
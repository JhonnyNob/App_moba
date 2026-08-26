import React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createStackNavigator
} from '@react-navigation/stack';

import Login from './Login';
import Menu from './Menu';
import Cliente from './Cliente';

const Stack = createStackNavigator();

const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: true,
          }}
        />

        <Stack.Screen
          name="Cliente"
          component={Cliente}
          options={{
            gestureEnabled: true,
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );

};

export default App;

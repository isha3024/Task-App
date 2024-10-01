import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { HomeScreen, LoginScreen, RegisterScreen, SplashScreen } from '../../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'


const Stack = createNativeStackNavigator()

export const MainStackNavigation = () => {

  const selectIsUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  console.log("selectIsUserLoggedIn: ", selectIsUserLoggedIn);

  const [showSplashScreen, setHideSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 1500);
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        {
          showSplashScreen && (
            <Stack.Screen
              component={SplashScreen}
              name='splashScreen'
            />
          )
        }
        {
          !selectIsUserLoggedIn && (
            <>
              <Stack.Screen
                component={RegisterScreen}
                name='registerScreen'
              />
              <Stack.Screen
                component={LoginScreen}
                name='loginScreen'
              />
            </>
          )
        }
        <Stack.Screen
          component={HomeScreen}
          name='homeScreen'
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
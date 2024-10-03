import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSelector } from 'react-redux'

import { SplashScreen } from '../../screens'
import { BottomStackNavigation } from '../bottomStackNavigation'
import { AuthStackNavigation } from '../authStackNavigation'


const Stack = createNativeStackNavigator()

export const MainStackNavigation = () => {

  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const [showSplashScreen, setHideSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 1500);
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showSplashScreen && (
          <Stack.Screen component={SplashScreen} name="splashScreen" />
        )}
        {
          isUserLoggedIn
            ? (
              <Stack.Screen component={BottomStackNavigation} name='bottomStackNavigation' />
            )
            : (
              <Stack.Screen component={AuthStackNavigation} name='authStackNavigation' />
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );

}
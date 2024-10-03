import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen, RegisterScreen } from '../../screens'
import { useSelector } from 'react-redux'

const AuthStack = createNativeStackNavigator()

export const AuthStackNavigation = () => {

  return (
    <AuthStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <AuthStack.Screen
        component={RegisterScreen}
        name='registerScreen'
      />
      <AuthStack.Screen
        component={LoginScreen}
        name='loginScreen'
      />
    </AuthStack.Navigator>
  )
}

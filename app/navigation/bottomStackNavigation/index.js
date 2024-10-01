import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CartScreen, HomeScreen } from '../../screens'
import { color, fonts, fontSize, IcCart, IcHome, size } from '../../theme'
import { Text } from 'react-native'


const Tab = createBottomTabNavigator()

export const BottomStackNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: color.error,
      tabBarInactiveTintColor: color.darkTextColor,
      tabBarStyle: {
        backgroundColor: color.borderColor,
          height: size.moderateScale(60),
          borderTopWidth: 0,
          elevation: 10, 
          borderTopLeftRadius: size.moderateScale(20),
          borderTopRightRadius: size.moderateScale(20),
          position: 'absolute',
          bottom: 0
      },
      tabBarLabelStyle: {
        fontSize: fontSize.littleMedium,
            color: color.darkTextColor,
            fontFamily:fonts.mPlusBold
      },
    }}
    >
      <Tab.Screen
        component={HomeScreen}
        name='homeScreen'
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{
              color: focused ? color.error : color.darkTextColor,
              fontFamily: fonts.mPlusBold,
              fontSize: fontSize.littleMedium,
            }}>
              Home
            </Text>
          ),
          tabBarIcon:  ({ color }) => (<IcHome stroke={color}  />)
        }}
      />
      <Tab.Screen
        component={CartScreen}
        name='cartScreen'
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{
              color: focused ? color.error : color.darkTextColor,
              fontFamily: fonts.mPlusBold,
              fontSize: fontSize.littleMedium,
            }}>
              Cart
            </Text>
          ),
          tabBarIcon:  ({ color }) => (<IcCart stroke={color}  />)
        }}
      />
    </Tab.Navigator>
  )
}

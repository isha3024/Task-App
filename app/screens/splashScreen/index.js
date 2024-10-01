import React from 'react'
import { View, Text } from 'react-native'

import { Screen } from '../../components'
import * as styles from './styles'
import LottieView from 'lottie-react-native'
import { lottieIcons } from '../../theme'

export const SplashScreen = () => {
  return (
    <Screen translucent={true}>
      <View style={styles.mainView()}>
        <LottieView 
          autoPlay
          loop
          source={lottieIcons.spalshIcon}
          style={styles.lottieImage()}
        />
      </View>
    </Screen>
  )
}

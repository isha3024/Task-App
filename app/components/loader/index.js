import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

import {lottieIcons} from '../../theme';
import * as styles from './styles';

export const Loader = () => {
  return (
    <View style={styles.mainView()}>
      <LottieView
        source={lottieIcons.loader}
        autoPlay
        loop
        style={styles.lottieImage()}
      />
    </View>
  );
};
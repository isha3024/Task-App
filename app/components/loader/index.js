import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

import {lottieIcons} from '../../theme';
import * as styles from './styles';

export const Loader = ({
  location,
}) => {
  return (
    <View style={styles.mainView(location)}>
      <LottieView
        source={lottieIcons.loader}
        autoPlay
        loop
        style={styles.lottieImage()}
      />
    </View>
  );
};
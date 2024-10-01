import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


import { Loader } from '../loader';
import { color } from '../../theme';
import * as styles from './styles';

const statusBarHeight = StatusBar.currentHeight;

export const Screen = ({
  children,
  withScroll,
  style,
  bgColor,
  scrollStyle,
  scrollRef,
  onScrolling,
  keyboardShouldPersistTaps,
  extraScrollHeight,
  loading,
  translucent,
  ...props
}) => {

  if (withScroll) {
    return (
      <SafeAreaView style={styles.mainContainer(bgColor)}>
        <StatusBar
          translucent={translucent}
          backgroundColor={bgColor ?? color.primary}
          barStyle={bgColor ? 'light-content' : 'dark-content'}
        />
        {loading && <Loader />}
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
          contentContainerStyle={scrollStyle}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={onScrolling}
          innerRef={scrollRef}
          scrollEventThrottle={16}
          extraScrollHeight={extraScrollHeight}
          enableOnAndroid={true}
          alwaysBounceVertical={false}
          {...props}>
          <View style={styles.full(statusBarHeight)}>{children}</View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container(bgColor, statusBarHeight)}>
          <StatusBar
            translucent={translucent}
            backgroundColor={bgColor ?? color.primary}
            barStyle={bgColor ? 'light-content' : 'dark-content'}
          />
          {loading && <Loader />}
          <View style={styles.container(style)}>{children}</View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
};
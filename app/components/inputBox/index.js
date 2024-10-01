import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';

import * as styles from './styles';
import { color } from '../../theme';  // Ensure you have your colors in your theme file

export const InputBox = ({
  label,
  value,
  onChangeText,
  placeholder,
  autoCapitalize,
  secureTextEntry,
  keyboardType,
  rightIcon,
  renderRightIcon,
  onIconPress,
  error
}) => {

  const opacityAnim = useRef(new Animated.Value(0)).current;
  const borderColorAnim = useRef(new Animated.Value(0)).current;

  const animateErrorText = (show) => {
    Animated.timing(opacityAnim, {
      toValue: show ? 1 : 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  };

  const animateBorderColor = (show) => {
    Animated.timing(borderColorAnim, {
      toValue: show ? 1 : 0, 
      duration: 200,
      useNativeDriver: false
    }).start();
  };

  useEffect(() => {
    animateErrorText(!!error);
    animateBorderColor(!!error);
  }, [error]);

  const borderColor = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [color.borderColor, color.error]
  });

  return (
    <View style={styles.mainView()}>
      {label && (<Text style={styles.label()}>{label}</Text>)}
      
      <Animated.View style={[styles.textInputView(), { borderColor }]}>
        <TextInput
          style={styles.textInput()}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={color.textColor}
          autoCapitalize={autoCapitalize ?? 'none'}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
        {rightIcon && (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onIconPress}
            style={styles.rightIconView()}
          >
            {renderRightIcon()}
          </TouchableOpacity>
        )}
      </Animated.View>

      {error && (
        <Animated.View style={[styles.errorView(), { opacity: opacityAnim }]}>
          <Text style={styles.errorText()}>* {error}</Text>
        </Animated.View>
      )}
    </View>
  );
};

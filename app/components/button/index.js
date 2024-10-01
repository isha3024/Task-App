import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import * as styles from './styles'

export const Button = ({
    activeOpacity,
    onPress,
    title,
    btnStyle
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity ?? 0.7} style={[styles.btnContainer(), btnStyle]}>
      <Text style={styles.btnText()}>{title}</Text>
    </TouchableOpacity>
  )
}
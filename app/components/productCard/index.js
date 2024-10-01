import React from 'react'
import { View, Text, Image } from 'react-native'

import * as styles from './styles'
import { Button } from '../button'
import { images } from '../../theme'

export const ProductCard = ({
  imageUri,
  productName,
  productPrice,
  productPress
}) => {
  const imageUrl = imageUri ? {uri: imageUri} : images.defaultImage;
  return (
    <View style={styles.mainView()}>
      <View style={styles.imageView()}>
        <Image source={imageUrl} style={styles.imageStyle()} />
      </View>
      <View style={styles.productDetails()}>
        <Text style={styles.productName()}>{productName}</Text>
        {productPrice && (<Text style={styles.productPrice()}>$ {productPrice}</Text>)}
        <Button
          title='Add to Cart'
          btnStyle={styles.button()}
          onPress={productPress}
        />
      </View>
    </View>
  )
}

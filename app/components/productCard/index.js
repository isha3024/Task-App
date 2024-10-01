import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import * as styles from './styles'
import { Button } from '../button'
import { IcMinus, IcPlus, images } from '../../theme'

export const ProductCard = ({
  imageUri,
  productName,
  productPrice,
  productPress,
  horizontal,
  productQuantity,
  onDecearsePress,
  onIncreasePress
}) => {
  const imageUrl = imageUri ? { uri: imageUri } : images.defaultImage;
  return (
    <View style={styles.mainView(horizontal)}>
      <View style={styles.imageView(horizontal)}>
        <Image source={imageUrl} style={styles.imageStyle(horizontal)} />
      </View>
      <View style={styles.productDetails(horizontal)}>
        <Text style={styles.productName()}>{productName}</Text>
        {productPrice && (<Text style={styles.productPrice()}>$ {productPrice}</Text>)}
        {
          horizontal && (
            <View style={styles.quanityView()}>
              <TouchableOpacity style={styles.quanityBtn()} onPress={onDecearsePress}>
                <IcMinus />
              </TouchableOpacity>
              <Text style={styles.quanityText()}>{productQuantity}</Text>
              <TouchableOpacity style={styles.quanityBtn()} onPress={onIncreasePress}>
                <IcPlus />
              </TouchableOpacity>
            </View>
          )
        }
        {
          !horizontal && (
            <Button
              title='Add to Cart'
              btnStyle={styles.button()}
              onPress={productPress}
            />
          )
        }
      </View>
    </View>
  )
}

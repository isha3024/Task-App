import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { ProductCard, Screen } from '../../components'
import { updateCart } from '../../redux/actions/UserActions'
import { size } from '../../theme'
import * as styles from './styles'

export const CartScreen = () => {

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch()
  const [cart, setCart] = useState(cartItems);

  const increaseQuantity = (product) => {
    const newCart = cart.map(item => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(newCart);
    dispatch(updateCart(newCart))
  }

  const decreaseQuantity = (product) => {
    const newCart = cart.map(item => {
      if (item.id === product.id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(newCart);
    dispatch(updateCart(newCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0).toFixed(2); // Format to two decimal places
  };



  useEffect(() => {
    setCart(cartItems);
  }, [cartItems])

  return (
    <Screen translucent={true}>
      <View style={styles.mainView()}>
        <View style={styles.topView()}>
          <Text style={styles.headerText()}>Cart Products</Text>
        </View>
        <View style={styles.bottomView()}>
          {
            cart.length !== 0
              ? (
                <FlatList
                  data={cart}
                  contentContainerStyle={{ gap: size.moderateScale(20) }}
                  renderItem={({ item }) => {
                    return (
                      <ProductCard
                        horizontal
                        productName={item?.name}
                        productPrice={item?.price}
                        productQuantity={item?.quantity}
                        onDecearsePress={() => decreaseQuantity(item)}
                        onIncreasePress={() => increaseQuantity(item)}
                      />
                    )
                  }}
                />
              )
              : (
                <View style={styles.noCartItemsView()}>
                  <Text style={styles.noCartItemsText()}>No products in Cart</Text>
                </View>
              )
          }
          {
          cart.length > 0 && (
            <View style={styles.orderTotalContainer()}>
              <Text style={styles.darkText()}>Cart Total: </Text>
              <Text style={styles.totalAmountText()}>$ {calculateTotal()}</Text>
            </View>
          )
        }
        </View>
      </View>
    </Screen>
  )
}

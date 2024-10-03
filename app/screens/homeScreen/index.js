import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ToastAndroid, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { removeUser } from '../../redux/actions/AuthActions'
import { ProductCard, Screen } from '../../components'
import { color, IcLogout, size, } from '../../theme'
import { addToCart } from '../../redux/actions/UserActions'
import * as styles from './styles'

export const HomeScreen = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const productList = () => {
    const options = {
      method: "POST",
      url: "http://192.168.1.62:3053/api/frontend/products/list",
      headers: {
        "Content-Type": "application/json",
        "apikey": "pwunzyconu",
        "authorization": "Bearer undefined",
        "reqfrom": "ext"
      },
      data: {
        "page": 1,
        "perPage": 10
      }
    }
    setLoading(true)
    axios(options)
    .then((response) => {
      setProducts(response.data.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log("error fetching products: ", error);
      setLoading(false)
    })
  }

  const alertUser = () => {
    Alert.alert('Logout', 'Are you sure you want to logout ?',
      [
        {text: 'Ok', onPress: () => userLogout()},
        {text:  'Cancel', onPress: () => null, style: 'cancel'}],
    )
  }

  const userLogout = () => {
    console.log("logout button clicked");
    dispatch(removeUser());
    ToastAndroid.show('User logged out!!', ToastAndroid.SHORT)
  }

  const addToCartProduct = (product) => {
    dispatch(addToCart({ name: product?.name, id: product?.id, image: product?.image?.thumbnail, price: product?.sale_price, quantity: 1 }));
    ToastAndroid.show(`${product?.name} added to cart`, ToastAndroid.SHORT)
  }

  useEffect(() => {
    productList()
  }, [])

  return (
    <View style={styles.mainContainerView()}>
      <View style={styles.mainView()}>
        <View style={styles.topView()}>
          <Text style={styles.name()}>Welcome!, {user?.name}</Text>
          <TouchableOpacity style={styles.rightIconView()} onPress={alertUser}>
            <IcLogout fill={color.error} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView()}>
          <Text style={styles.header()}>Products</Text>
          <Screen style={{backgroundColor: color.borderColor}} loading={loading} location={size.moderateScale(-150)} withScroll>
            <View style={styles.flatListView()}>
              <FlatList
                numColumns={2}
                scrollEnabled={false}
                contentContainerStyle={{ flexGrow: 1, gap: size.moderateScale(20) }}
                data={products}
                renderItem={({ item }) => {
                  const name = item?.name.length > 10 ? item?.name.slice(0, 10) + '...' : item?.name;
                  const image = item?.image?.thumbnail;
                  return (
                    <ProductCard
                      key={item?.id}
                      productName={name}
                      productPrice={item?.sale_price}
                      imageUri={item?.image?.thumbnail}
                      productPress={() => addToCartProduct(item)}
                    />
                  )
                }}
              />
            </View>
          </Screen>
        </View>
      </View>
    </View >
  )
}

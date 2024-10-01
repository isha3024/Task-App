import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { removeUser } from '../../redux/actions/AuthActions'
import { ProductCard, Screen } from '../../components'
import { color, IcLogout, images, size, } from '../../theme'
import * as styles from './styles'
import { addToCart } from '../../redux/actions/UserActions'

export const HomeScreen = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const cart = useSelector((state) => state.cart.items);
  console.log("cart: ",cart)
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
        console.log("response::: ", response.data.data);
        setProducts(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log("error fetching products in apiCalls: ", error);
        setLoading(false)
      })
  }

  const userLogout = () => {
    console.log("logout button clicked");
    dispatch(removeUser());
    ToastAndroid.show('User logged out!!', ToastAndroid.SHORT)
  }

  const addToCartProduct =  (product) => {
    dispatch(addToCart({name: product?.name, id: product?.id, image: product?.image?.thumbnail, price: product?.sale_price}));
    ToastAndroid.show(`${product?.name} added to cart`, ToastAndroid.SHORT)
  }


  useEffect(() => {
    productList()
  }, [])

  return (
    <Screen translucent={true}>
      <View style={styles.mainView()}>
        <View style={styles.topView()}>
          <Text style={styles.name()}>Welcome!, {user?.name}</Text>
          <TouchableOpacity style={styles.rightIconView()} onPress={userLogout}>
            <IcLogout fill={color.error} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView()}>
          <Text style={styles.header()}>Products</Text>
          <Screen loading={loading} withScroll>
            <View style={styles.flatListView()}>
            <FlatList
              numColumns={2}
              scrollEnabled={false}
              contentContainerStyle={{ flexGrow: 1, gap: size.moderateScale(20) }}
              data={products}
              renderItem={({ item }) => {
                const name = item?.name.length > 10 ? item?.name.slice(0, 10)+ '...' : item?.name;
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
    </Screen >
  )
}

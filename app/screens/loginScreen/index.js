import React, { useState } from 'react'
import { View, Text, ToastAndroid, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { login } from '../../redux/actions/AuthActions'
import { Button, InputBox, Screen } from '../../components'
import { IcBackArrow, IcEyeClose, IcEyeOpen } from '../../theme'
import * as styles from './styles'

export const LoginScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(true);
  const [inputFields, setInputFields] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const setInputFieldsChange = (field, value) => {
    setInputFields((prev) => ({ ...prev, [field]: value }));
  }

  const validateInputFields = () => {
    const { email, password } = inputFields;
    let error = {};
    let emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if(!email) {
      error.email = 'Please enter email'
    }
    else if(!emailRegex.test(email)) {
      error.email = 'Please enter a valid email address'
    }

    if(!password) {
      error.password = 'Please enter password'
    }
    else if(password.length < 8) {
      error.password = 'Password must be at least 8 characters long'
    }

    setError(error);
    return Object.keys(error).length === 0
  }

  const loginUser =  () => {
    if(!validateInputFields()) {
      return;
    }
    const user = {
      email: inputFields?.email,
      password:inputFields?.password
    }
    console.log("user in login screen: ",user)

    dispatch(login(user));
    // navigation.navigate('bottomStackNavigation');
  }

  return (
    <Screen withScroll translucent={true} scrollStyle={styles.screen()}>
      <View style={styles.mainView()}>
      <View style={styles.topView()}>
        <TouchableOpacity style={styles.backArrowView()} onPress={()=> navigation.navigate('registerScreen')}>
          <IcBackArrow />
        </TouchableOpacity>
        <Text style={styles.headerText()}>Login</Text>
        </View>
        <View style={styles.middleView()}>
          <View style={styles.formView()}>
            <InputBox
              label='Email'
              value={inputFields?.email}
              onChangeText={(txt) => setInputFieldsChange('email', txt)}
              keyboardType='email-address'
              placeholder='Enter your email address'
              error={error?.email}
            />
            <InputBox
              label='Password'
              value={inputFields?.password}
              onChangeText={(txt) => setInputFieldsChange('password', txt)}
              keyboardType='default'
              placeholder='Enter your password'
              secureTextEntry={showPassword}
              rightIcon
              renderRightIcon={() => showPassword ? (<IcEyeOpen />) : (<IcEyeClose />)}
              onIconPress={() => setShowPassword(prev => !prev)}
              error={error?.password}
            />
            <Button
              title='Login'
              btnStyle={styles.button()}
              onPress={loginUser}
            />
          </View>
        </View>
      </View>
    </Screen>
  )
}

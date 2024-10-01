import React, { useState } from 'react'
import { View, Text, ToastAndroid } from 'react-native'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { IcEyeClose, IcEyeOpen } from '../../theme'
import { Button, InputBox, Screen } from '../../components'
import * as styles from './styles'
import { addUser } from '../../redux/actions/AuthActions'

export const RegisterScreen = () => {


  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(true);
  const [inputFields, setInputFields] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)

  const setInputFieldsChange = (field, value) => {
    setInputFields((prev) => ({ ...prev, [field]: value }));
  }

  const validateInputFields = () => {
    const { name, email, password } = inputFields;
    let error = {};
    let emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!name) {
      error.name = 'Please enter fullname'
    }
    else if(name.length < 3) {
      error.name = 'Name must be at least 3 characters long'
    }
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

  const registerUser =  () => {
    if(!validateInputFields()) {
      return;
    }
    const user = { 
      name: inputFields.name, 
      email: inputFields.email, 
      password: inputFields.password 
    }
    console.log("user in register screen: ",user)

    dispatch(addUser(user))
    ToastAndroid.show('User created successfully 😊', ToastAndroid.SHORT)
    navigation.navigate('loginScreen');
  }


  return (
    <Screen translucent={true} withScroll scrollStyle={styles.screen()}>
      <View style={styles.mainView()}>
        <View style={styles.topView()}>
          <Text style={styles.headerText()}>Register</Text>
        </View>
        <View style={styles.middleView()}>
          <View style={styles.formView()}>
            <InputBox
              label='Name'
              value={inputFields?.name}
              onChangeText={(txt) => setInputFieldsChange('name', txt)}
              keyboardType='default'
              placeholder='Enter your full name'
              autoCapitalize='words'
              error={error?.name}
            />
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
              title='Sign up'
              btnStyle={styles.button()}
              onPress={registerUser}
            />
          </View>
        </View>
      </View>
    </Screen>
  )
}
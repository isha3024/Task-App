import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import { MainStackNavigation } from './navigation'
import { store, persistor } from './redux/reducers/index'

export const App = () => {

  console.log("store: ",store.getState())

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <MainStackNavigation />
      </PersistGate>
    </Provider>
  )
}
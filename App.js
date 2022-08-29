import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/Navigation'
import ProductProvider from './src/context/ProductContext'



const App = () => {

  return (
    <ProductProvider>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </ProductProvider>
  )
}

export default App
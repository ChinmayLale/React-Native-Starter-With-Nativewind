import { View, Text, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import LoginScreen from './src/Common/Login';

const App = () => {
  const theme = useColorScheme();
  return (
    <View className='bg-red-50'>
     <StatusBar
        barStyle="dark-content" // You can use 'light-content' for white text if dark background
        translucent={true} // Makes StatusBar transparent
        backgroundColor="transparent" // Sets the background of the StatusBar to transparent
      />
      <LoginScreen/>
    </View>
  )
}

export default App
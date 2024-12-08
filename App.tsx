import { View, Text, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import LoginScreen from './src/Common/Login';

const App = () => {
  const theme = useColorScheme();
  return (
    <View className='bg-red-50'>
      <StatusBar backgroundColor={theme === 'dark' ? 'black':'lightgreen'}/>
      <LoginScreen/>
    </View>
  )
}

export default App
import { View, Text, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import LoginScreen from './src/Common/Login';

const App = () => {
  const theme = useColorScheme();
  return (
    <View className='flex-1 bg-red-50'> {/* Added flex-1 */}
      <LoginScreen/>
    </View>
  )
}

export default App
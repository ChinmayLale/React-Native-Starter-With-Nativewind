import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, SafeAreaView, Alert } from 'react-native';

// You can import NativeWind styles by adding them to the className prop
function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in both fields.');
    } else {
      // Perform login logic here
      Alert.alert('Success', `Logged in with email: ${email}`);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-100 p-4">
      <View className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <Text className="text-2xl font-bold text-center mb-6 text-gray-800">Login</Text>
        
        <TextInput
          className="h-12 p-3 mb-4 border border-gray-300 rounded-md"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <TextInput
          className="h-12 p-3 mb-6 border border-gray-300 rounded-md"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity
          className="w-full py-3 bg-blue-500 rounded-md hover:bg-blue-600"
          onPress={handleLogin}
        >
          <Text className="text-white text-center text-lg">Log In</Text>
        </TouchableOpacity>

        <View className="mt-4 flex-row justify-center">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-blue-500">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}




export default LoginScreen;
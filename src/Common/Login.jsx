import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
  Image,
} from 'react-native';
import { getResponsiveHeight, getResponsiveWidth } from '../utils/dimensionsHelper';

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
      <View
        className="w-full  max-w-md bg-white p-6 rounded-lg shadow-md"
        style={{
          height:getResponsiveHeight(20),
          width:getResponsiveWidth(100)
        }}>
        <TouchableOpacity
          className="bg-white rounded-lg shadow-lg overflow-hidden w-[200px] h-[500px]"
          onPress={() => {}}>
          <Image
            source={{uri: 'https://picsum.photos/500/300'}} // Check if this URL works
            className="w-full h-40 object-cover"
          />
          <View className="p-4">
            <Text className="text-xl font-bold text-gray-900">
              Welcome Back
            </Text>
            <Text className="text-sm text-gray-600 mt-2">
              Please login to continue
            </Text>
          </View>
        </TouchableOpacity>

        <View className="mt-6">
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            keyboardType="email-address"
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
          />
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-blue-500 p-3 mt-6 rounded-md items-center">
            <Text className="text-white font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

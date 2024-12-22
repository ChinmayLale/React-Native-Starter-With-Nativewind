import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  getResponsiveHeight,
  getResponsiveWidth,
} from '../utils/dimensionsHelper';
import FastImage from 'react-native-fast-image';

function LoginScreen() {
  return (
    <View className="flex-1 w-full bg-slate-50"> {/* Removed h-fit */}
      <StatusBar
        barStyle="light-content" // Changed to light-content since background is dark
        translucent={true}
        backgroundColor="transparent"
      />
      <View className="flex-1">
        <View className=""> {/* Removed relative as it's not needed */}
          <FastImage
            style={{
              width: getResponsiveWidth(100),
              height: getResponsiveHeight(58), // Reduced height to leave space for content below
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2020/03/08/21/41/illustration-4913840_1280.jpg',
            }}
          />
        </View>
        <View className="p-4"> {/* Added padding for visibility */}
          <Text className="text-[36px] font-mono text-slate-900 font-bold">Winter</Text>
          <Text className="text-[36px] font-mono text-slate-900 font-bold">Vacation Trips</Text>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
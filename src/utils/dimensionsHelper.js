import { Dimensions } from 'react-native';

// Get current device screen dimensions
const { width, height } = Dimensions.get('window');

// Function to get responsive width based on current screen width
const getResponsiveWidth = (value) => {
  return (width / 100) * value; // Scale value relative to screen width
};

// Function to get responsive height based on current screen height
const getResponsiveHeight = (value) => {
  return (height / 100) * value; // Scale value relative to screen height
};

export { getResponsiveWidth, getResponsiveHeight };

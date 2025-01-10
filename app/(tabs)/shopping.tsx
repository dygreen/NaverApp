import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';

const Shopping = () => {
  return (
    <View>
      <Text>Shopping</Text>
      <TouchableOpacity
        onPress={() => {
          router.navigate({ pathname: 'browser' });
        }}>
        <Text>Go To Browser</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Shopping;

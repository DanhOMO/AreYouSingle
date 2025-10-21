import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Swipe" component={SwipeScreen} />
      <Stack.Screen name="Matches" component={MatchesScreen} />
    </Stack.Navigator>
  );
}
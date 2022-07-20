import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStyle from '../Styles/HomeStyle';



export default function HomeScreen({navigation}) {
    return (
      <View style={HomeStyle.container}>
      <Text>Home Screen</Text>
      </View>
    );
  }
import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function Menubar() {
const navigation = useNavigation();
  return (
    <View>
    <View style = {{flexDirection: "row", padding:20}}>
      <Button style = {{flex:1, padding:20}}
        onPress={() => navigation.navigate('HOME')}
        title="HOME"
        color="#00cc00"
      />
      <Button style = {{flex:1, padding:20}}
        onPress={() => navigation.navigate('INFO')}
        title="INFO"
        color="#00cc00"
      />
      <Button style = {{flex:1, padding:20}}
        onPress={() => navigation.navigate('CHAT')}
        title="CHAT"
        color="#00cc00"
      />
    </View>
    </View>
  );
}

function InfoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Info Screen</Text>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat Screen</Text>
    </View>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HOME"
        screenOptions={{
          headerTitle: () => <Menubar/>,
        }}>
        <Stack.Screen name='HOME' component={HomeScreen} />
        <Stack.Screen name='INFO' component={InfoScreen} />
        <Stack.Screen name='CHAT' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


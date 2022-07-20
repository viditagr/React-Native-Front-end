import * as React from 'react';
import { StyleSheet, Text, View, Button, Image,SafeAreaView, ScrollView, Alert,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';


import HomeStyle from '../Styles/HomeStyle';

const Stack = createNativeStackNavigator();

function Post() {
  const navigation = useNavigation();
  return (
  
    <View style={HomeStyle.post}>
      
      <Button
        title="Title"
        onPress={() => Alert.alert("unfinished")}
        />
        <Text style={{color:"#f7f5f5"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </Text>
    </View>
  
  
    );
}

function PostScreen() {
  return (
    <View >
      <Text style={{color:"#f7f5f5"}}>Post Screen</Text>
    </View>
  );
}

function Category() {
  return (

    <View style={HomeStyle.category}>

    <Text style={{color:"#f7f5f5"}}>Category</Text>

    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="PostScreen">
          <Stack.Screen name="PostScreen" component={PostScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>

      
      <Post/>
      <Post/>
      <Post/>
    
    
    </View>


  );
}

export default function HomeScreen() {
  return (
      <View  style={HomeStyle.container}>


<SafeAreaView >
      <ScrollView style={HomeStyle.scrollView}>
      <View  style={HomeStyle.container}>
        <Text style={{fontSize: 40}}>Category</Text>
        <Category />
      </View>

      <View  style={HomeStyle.container}>
        <Text>Category</Text>
        <Category />
      </View>

      <View  style={HomeStyle.container}>
        <Text>Category</Text>
        <Category />
      </View>
      </ScrollView>
    </SafeAreaView>

      </View>
    );
}
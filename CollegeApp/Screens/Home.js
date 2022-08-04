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
        onPress={() => navigation.navigate('PostScreen')}
        />
        <Text style={HomeStyle.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </Text>
    </View>
  
  
    );
}

function PostScreen() {
  return (
    <View style={HomeStyle.container}>
      <Text style={HomeStyle.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </Text>
    </View>
  );
}

function PostGroup({navigation}) {
  
  return (
    <SafeAreaView >
      <ScrollView style={HomeStyle.scrollView}>

    <View style={HomeStyle.postGroup}>

    <Text style={{color:"#37ad2b", fontSize:30, }}>Trending</Text>


      
      <Post {...navigation}/>
      <Post {...navigation}/>
      <Post {...navigation}/>
      <Post {...navigation}/>
      <Post {...navigation}/>
      <Post {...navigation}/>
      <Post {...navigation}/>
    
    </View>

      </ScrollView>
    </SafeAreaView>

  );
}

export default function HomeScreen() {
  return (
      <View  style={HomeStyle.container}>

< NavigationContainer independent={true} style={HomeStyle.container}>
      <Stack.Navigator initialRouteName="AllPosts" screenOptions={{ headerShown: false,
             }}>
        <Stack.Screen name="AllPosts" component={PostGroup} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      
      </View>
    );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TextInput, onChangeText, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

  }

  const handleforgotpwd = () => {

  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Image style={styles.image} source={require("./assets/log.jpeg")} />
      <StatusBar style="auto" />
      <TextInput 
      style={styles.TextInput}
      placeholder = "Email"
      />
      <TextInput
      style={styles.TextInput}
      secureTextEntry={true}
      placeholder = "Password"
      />
      </View>
      <View>
      <TouchableOpacity
      style={styles.login_btn}
      onPress={handleLogin}
      >
      <Text style= {styles.logintext}>Login</Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity
      style={styles.forgot_btn}
      onPress={handleforgotpwd}
      >
      <Text style= {styles.forgettext}>Forgot Password?</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  TextInput: {
    width: 200,
    height: 44,
    padding: 5,
    margin: 5,
  },
  login_btn: {
    width: 90,
    height: 44,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    marginBottom: 10,
  },
  forgot_btn: {
    width: 200,
    height: 44,
    padding: 5,
    margin: 5,
    color: '#fff',
    borderColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logintext: {
    color: 'black',
    fontSize: 15,
  },
  forgettext: {
    color: 'black',
    fontSize: 12,
  },
});

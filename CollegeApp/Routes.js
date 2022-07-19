import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Profile: {
   screen: Profile
  },
  Info:{
    screen: Info
  }
});
export default createAppContainer(Project);
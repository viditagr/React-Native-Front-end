import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from "./Screens/Login";
import ForgotLogin from "./Screens/ForgotLogin";
const Project= createStackNavigator({
  Login: {
   screen: Login
  },
  ForgotLogin: {
   screen: ForgotLogin
  }
});
export default createAppContainer(Project);
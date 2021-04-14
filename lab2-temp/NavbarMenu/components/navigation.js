import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import Icon from "react-native-vector-icons/FontAwesome";

import HomeScreen from "../page/Home_page.js"
import SpreadOperatorClass from "../page/Spread_operator.js";
import RestParametersClass from "../page/Rest_parameters.js";
import useStateClass from "../page/useState.js";


 export const bottomNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      },
    },
    Spread_operator: {
      screen: SpreadOperatorClass,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        ),
      },
    },
    Rest_parameters: {
      screen: RestParametersClass,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="comments" size={25} color={tintColor} />
        ),
      },
    },
    useState: {
      screen: useStateClass,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "#eb6e3d",
    },
  }
);

import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./Home.js";
import LoadingImage from "./loadingImage";
import ImageSlider from "./sliderImage.js";
import SpreadOperatorScreen from "./spread_operator.js";

const TabBottomNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={26} name={"ios-home"} />
          </View>
        ),
      },
    },

    Image1: {
      screen: LoadingImage,
      navigationOptions: {
        tabBarLabel: "Loading image",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={26}
              name={"ios-settings"}
            />
          </View>
        ),
      },
    },

    ImageSlide: {
      screen: ImageSlider,
      navigationOptions: {
        tabBarLabel: "Image Slider",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={26}
              name={"ios-settings"}
            />
          </View>
        ),
      },
    },

    SpreadOperator: {
      screen: SpreadOperatorScreen,
      navigationOptions: {
        tabBarLabel: "Spread operator",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={26}
              name={"ios-settings"}
            />
          </View>
        ),
      },
    },
  },

  {
    initialRouteName: "Home",
    activeColor: "#f0edf6",
    inactiveColor: "#226557",

    barStyle: {
      backgroundColor: "#3fc750",
    },
  }
);

export default createAppContainer(TabBottomNavigator);

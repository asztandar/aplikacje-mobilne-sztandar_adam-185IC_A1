import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./Home.js";
import Sortowanie from "./sortowanie";
import LeniweLadowanie from "./leniweLadowanie.js";
import StepProgress from "./stepProgress";

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

    Sort: {
      screen: Sortowanie,
      navigationOptions: {
        tabBarLabel: "sortowanie",
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

    Leniwe: {
      screen: LeniweLadowanie,
      navigationOptions: {
        tabBarLabel: "Lazy loading",
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
    StepProgressBar: {
      screen: StepProgress,
      navigationOptions: {
        tabBarLabel: "Step progress",
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
  }
    
);

export default createAppContainer(TabBottomNavigator);

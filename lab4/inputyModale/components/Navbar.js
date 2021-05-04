import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./Home.js";
import TextInputy from "./textinputy.js";
import SelectExample from "./selectExample.js";
import Switcher from "./switcher.js";
import PickerDataTime from "./pickerDataTime.js"
import Toast from "./toast.js";

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

    InputyText: {
      screen: TextInputy,
      navigationOptions: {
        tabBarLabel: "TextInput",
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

    Select: {
      screen: SelectExample,
      navigationOptions: {
        tabBarLabel: "Select",
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

    Switch: {
      screen: Switcher,
      navigationOptions: {
        tabBarLabel: "Switch",
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

    PickerDT: {
      screen: PickerDataTime,
      navigationOptions: {
        tabBarLabel: "DataTime",
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

    Toas: {
      screen: Toast,
      navigationOptions: {
        tabBarLabel: "Toast",
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

import React from "react";
import { Text, View } from "react-native";
import Image from "react-native-image-progress";
import ProgressBar from "react-native-progress/Bar";

import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Fontisto from "react-native-vector-icons/Fontisto";

import styles from "../style/stylesheet";
export default class lazyRender extends React.Component {
  render() {
    return (
      <View style={styles.lazyRenderContainer}>
        <Text>Leniwe ładowanie obrazka oraz ikony</Text>
        <View>
          <Text>Przykład 1: ładowanie obrazka:</Text>
          <View style={{ borderWidth: 5 }}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/3584871/pexels-photo-3584871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=3828&w=5104",
              }}
              indicator={ProgressBar}
              style={styles.image}
            />
          </View>
        </View>

        <View>
          <Text>Ikony:</Text>
          <View>
            <Text>FontAwesome:</Text>
            <View style={styles.icons}>
              <FontAwesome style={{marginLeft: 4}} name="comments" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="music" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="search" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="heart" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="inbox" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="home" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="headphones" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="book" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="tag" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="qrcode" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="camera" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="print" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="image" size={30} color="#900" />
              <FontAwesome style={{marginLeft: 4}} name="info-circle" size={30} color="#900" />
            </View>
          </View>

          <View>
            <Text>Fontisto:</Text>
            <View style={styles.icons}>
              <Fontisto style={{marginLeft: 4}} name="island" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="taxi" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="helicopter" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="plane" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="cocktail" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="room" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="spinner" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="snowflake" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="sun" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="photograph" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="passport" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="parasol" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="shield" size={30} color="#900" />
              <Fontisto style={{marginLeft: 4}} name="curve" size={30} color="#900" />
            </View>
          </View>

          <View>
            <Text>EvilIcons:</Text>
            <View style={styles.icons}>
              <EvilIcons style={{marginLeft: 4}} name="archive" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="chart" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="cart" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="camera" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="bell" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="calendar" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="clock" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="close" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="envelope" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="minus" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="location" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="sc-skype" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="pointer" size={30} color="#900" />
              <EvilIcons style={{marginLeft: 4}} name="retweet" size={30} color="#900" />
            </View>
          </View>

          <View>
            <Text>Feather:</Text>
            <View style={styles.icons}>
              <Feather style={{marginLeft: 4}} name="box" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="calendar" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="camera-off" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="cast" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="check" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="chrome" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="clock" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="clipboard" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="cloud" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="coffee" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="copy" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="compass" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="cpu" size={30} color="#900" />
              <Feather style={{marginLeft: 4}} name="download" size={30} color="#900" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

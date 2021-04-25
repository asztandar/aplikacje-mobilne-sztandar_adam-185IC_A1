import React, { Component } from "react";

import { Text, View, ScrollView } from "react-native";

import styles from "../style/stylesheet";

export default class Scroll2 extends Component {
  render() {
    return (
      <View style={styles.containerScroll2}>
        <View style={styles.headerScroll2}>
          <Text>ScrollView 2</Text>
        </View>
        <Text style={styles.hymnTitle}>Hymn Polski:</Text>
        <View style={styles.contentScroll2Scroll}>
          <ScrollView
            contentContainerStyle={styles.contentScroll2}
            persistentScrollbar={true}
            showsVerticalScrollIndicator={true}
            style = {styles.scrollview2}
          >
            <Text>Jeszcze Polska nie zginęła,</Text>
            <Text>Kiedy my żyjemy</Text>
            <Text>Co nam obca przemoc wzięła</Text>
            <Text>Szablą odbierzemy.</Text>
            <Text></Text>
            <Text>Marsz, marsz Dąbrowski</Text>
            <Text>Z ziemi włoskiej do Polski.</Text>
            <Text>Za twoim przewodem</Text>
            <Text>Złączym się z narodem.</Text>
            <Text></Text>
            <Text>Przejdziem Wisłę, przejdziem Wartę,</Text>
            <Text>Będziem Polakami.</Text>
            <Text>Dał nam przykład Bonaparte,</Text>
            <Text>Jak zwyciężać mamy</Text>
            <Text></Text>
            <Text>Marsz, marsz Dąbrowski</Text>
            <Text>Z ziemi włoskiej do Polski.</Text>
            <Text>Za twoim przewodem</Text>
            <Text>Złączym się z narodem</Text>
            <Text></Text>
            <Text>Jak Czarniecki do Poznania</Text>
            <Text>Po szwedzkim zaborze,</Text>
            <Text>Dla ojczyzny ratowania</Text>
            <Text>Wrócim się przez morze. </Text>
            <Text></Text>
            <Text>Marsz, marsz Dąbrowski,</Text>
            <Text>Z ziemi włoskiej do Polski.</Text>
            <Text>Za twoim przewodem</Text>
            <Text>Złączym się z narodem.</Text>
            <Text></Text>
            <Text>Już tam ojciec do swej Basi</Text>
            <Text>Mówi zapłakany</Text>
            <Text>- Słuchaj jeno, pono nasi</Text>
            <Text>Biją w tarabany.</Text>
            <Text></Text>
            <Text>Marsz, marsz Dąbrowski,</Text>
            <Text>Z ziemi włoskiej do Polski.</Text>
            <Text>Za twoim przewodem</Text>
            <Text>Złączym się z narodem.</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

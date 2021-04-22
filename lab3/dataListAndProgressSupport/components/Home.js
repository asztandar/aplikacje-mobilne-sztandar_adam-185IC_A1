import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import styles from "../style/stylesheet";

const HomeScreen = (props) => {
  return (
    <View style={styles.containerHome}>
      <View style={styles.headerHome}>
        <Text>Aplikacja stworzona przez </Text>
           <Text style={styles.boldText}>Adam Sztandar</Text>
        <Text>185IC A2</Text>
        <Text>21663</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

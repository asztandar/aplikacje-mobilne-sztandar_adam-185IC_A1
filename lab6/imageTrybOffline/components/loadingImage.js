import React from "react";
import { Text, View, Image } from "react-native";

import styles from "../style/stylesheet";
const LoadingImage = (props) => {
  return (
    <View style={styles.loadingImageContainer}>
      <View style={styles.loadingImageExample}>
        <Text>Wczytanie za pomocą uri:</Text>
        <Image style={styles.image} source={{uri: 'https://baxu.pl/storage/posts/January2020/comment_2GKqXI1n6jndWsLGnHjhtVMoB9wst7ib.jpg',}}  /> 
      </View>
      <View style={styles.loadingImageExample}>
        <Text>Wczytanie za pomocą require:</Text>
        <Image style={styles.image} source={require('../assets/15232084880351.jpg')}  /> 
      </View>
    </View>
  );
};

export default LoadingImage;

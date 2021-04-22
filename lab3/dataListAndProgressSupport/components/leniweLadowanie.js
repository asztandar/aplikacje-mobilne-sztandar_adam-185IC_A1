import React, {Component, Suspense} from 'react';

import { Text, View, Image } from "react-native";

const daneLeniwe = React.lazy(() => import("./daneLeniweLadowanie"));

import styles from "../style/stylesheet";

export default class LeniweLadowanie extends Component {
  render() {
    return (
      <View style={styles.containerLeniweLadowanie}>
        <View style={styles.headerLeniweLadowanie}>
          <Text>Leniwe ładowanie!</Text>
        </View>
        <View>
          <Suspense fallback={<Text>Ładowanie...</Text>}>
            <daneLeniwe length="1000000" />
          </Suspense>
        </View>
      </View>
    );
  }
}

/*
const LeniweLadowanie = (props) => {
    
  return (
    <View style={styles.containerLeniweLadowanie}>
      <View style={styles.headerLeniweLadowanie}>
        <Text>Leniwe ładowanie!</Text>
      </View>
      <View>
        <Suspense fallback={<Text>Ładowanie...</Text>}>
          <daneLeniwe length="1000000" />
        </Suspense>
      </View>
    </View>
  );
};

export default LeniweLadowanie;

*/

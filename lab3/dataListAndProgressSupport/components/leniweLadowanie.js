import React, {Component, Suspense} from 'react';

import { Text, View } from "react-native";

const DaneLeniwe = React.lazy(() => import("./daneLeniweLadowanie"));

import styles from "../style/stylesheet";

export default class LeniweLadowanie extends Component {
  render() {
    return (
      <View style={styles.containerLeniweLadowanie}>
        <View style={styles.headerLeniweLadowanie}>
          <Text>Leniwe ładowanie!</Text>
          <Text>Korzystając z poradnika: https://pl.reactjs.org/docs/code-splitting.html</Text>
        </View>
        <View style={styles.wrapperLeniweLadowanie}>
          <Suspense fallback={<Text>Ładowanie, proszę czekać...</Text>}>
            <DaneLeniwe length="99855" />
          </Suspense>
        </View>
      </View>
    );
  }
}


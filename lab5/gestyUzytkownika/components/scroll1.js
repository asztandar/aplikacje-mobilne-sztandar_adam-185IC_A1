import React, {Component, Suspense} from "react";

import { Text, View } from "react-native";

import styles from "../style/stylesheet";

const DaneLeniwe = React.lazy(() => import("./daneLeniweLadowanie"));

class Scroll1 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.containerScroll1}>
        <View>
          <Text style={styles.headerScroll1}>ScrollView1:</Text>
          <View>
          <Suspense fallback={<Text>Ładowanie, proszę czekać...</Text>}>
            <DaneLeniwe />
          </Suspense>
          </View>
        
        </View>
      </View>
    );
  }
}
export default Scroll1;

import React, { Component } from "react";
import { render } from "react-dom";
import { Text, View, ScrollView, Button } from "react-native";

import styles from "../style/stylesheet";



const WylosowaneText = ({ wylosowane }) => {
  let index = 0;
  return (
    <ScrollView>
      {wylosowane.map((liczba) => (
        <Text key={index++}>{liczba}</Text>
      ))}
    </ScrollView>
  );
};

const PosortowaneText = ({ posortowane }) => {
  let index2 = 0;
  return (
    <ScrollView>
      {posortowane.map((liczba2) => (
        <Text key={index2++}>{liczba2}</Text>
      ))}
    </ScrollView>
  );
};

class Sortowanie extends React.Component {
  constructor() {
    super();
    this.state = {
      wylosowane: [],
      posortowane: [],
    };
  }

  pressLosuj = () => {
    let max = 1000;
    let min = 0;

    for (let i = 0; i < 100; i++) {
      this.state.wylosowane.push(
        Math.floor(Math.random() * (max - min + 1)) + min
      );
    }
    console.log("liczby: ", this.state.wylosowane);
    this.forceUpdate();
  };
  compareNumbers(a, b) {
    return a - b;
  }
  pressSortuj = () => {
    if (this.state.wylosowane.length > 0) {
      this.state.posortowane = this.state.wylosowane.slice();
      this.state.posortowane.sort(this.compareNumbers);
      this.forceUpdate();
    } else {
      alert("najpierw wylosuj liczby ;)");
    }
  };

  render() {
    return (
      <View style={styles.containerSortowanie}>
        <View>
          <Text style={styles.headerSortowanie}>Sortowanie i filtrowanie</Text>
          <View style={styles.buttonWrapper}>
            <Button
              style={(styles.buttonSortowanie, styles.marginRgiht)}
              title="Losuj liczby"
              onPress={this.pressLosuj}
            />

            <Button
              style={styles.buttonSortowanie}
              title="Sortuj"
              onPress={this.pressSortuj}
            />
          </View>
          <View style={styles.numbersWrapper}>
            <View style={styles.numbersRandom}>
              <Text style={styles.centered}>Nieposortowane</Text>
              <WylosowaneText wylosowane={this.state.wylosowane} />
            </View>
            <View style={styles.numbersRandom}>
              <Text style={styles.centered}>Posortowane</Text>
              <PosortowaneText posortowane={this.state.posortowane} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Sortowanie;

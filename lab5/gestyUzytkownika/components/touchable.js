import React, { Component } from "react";
import { Text, View, TouchableOpacity, TouchableHighlight } from "react-native";
import styles from "../style/stylesheet";

const handlerLongClick = () => {
  alert(
    "Czy wiedziałeś że: \n\n W Niemczech sprzedaje się więcej gier planszowych niż gdziekolwiek indziej na Ziemi. \n Może czas w coś zagrać? ;)"
  );
};

class Touchable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      color: "black",
      colorTab: ["red", "green", "orange", "pink", "yellow", "brown"],
    };
  }

  handlePress = () => {
    if (this.state.counter === 5) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: this.state.counter + 1,
      });
    }

    this.setState({
      color: this.state.colorTab[this.state.counter]
    })


    
  };

  render() {
    return (
      <View style={styles.containerTouch}>
        <View style={styles.headerTouch}>
          <Text style={styles.whiteColor}>
            TouchableOpacity i TouchableHighlight
          </Text>
        </View>
        <View style={styles.touchableWrapper}>
          <TouchableOpacity
            style={styles.touchableOpacityButton}
            onLongPress={handlerLongClick}
            activeOpacity={0.6}
          >
            <Text style={styles.touchableOpacityText}>
              Przyciśnij mnie dłużej!
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.touchableWrapper}>
          <TouchableHighlight style={styles.touchableHighlightButton} onPress={this.handlePress}>
            <Text style={styles.touchableHighlightText}>Kliknij mnie!</Text>
          </TouchableHighlight>
          <View
            style={{
              backgroundColor: this.state.color,
              width: 30,
              height: 30,
              marginTop: 20,
            }}
          ></View>
        </View>
      </View>
    );
  }
}

export default Touchable;

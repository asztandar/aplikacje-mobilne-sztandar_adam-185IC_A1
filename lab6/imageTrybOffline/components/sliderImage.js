import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";

import styles, {imageSliderSize} from "../style/stylesheet";

const window = Dimensions.get("window");

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        sliderValue: 1,
    }
  }

  handleSlider = (value) => {
    this.setState({sliderValue: value})
  }

  render() {
    return (
      <View style={styles.sliderImageContainer}>
        <View>
          <Text>
            Przeciągając w prawo zwiększasz a w lewo zmniejszasz obrazek:
          </Text>
        </View>
        <View style={styles.sliderContent}>
          <Slider
            style={{ width: 400, height: 40 }}
            minimumValue={1}
            maximumValue={50}
            minimumTrackTintColor="#d9d1d0"
            maximumTrackTintColor="#000000"
            onValueChange={this.handleSlider}
          />
        </View>
        <View>
            <Text>
                Aktualna wartość slidera: {this.state.sliderValue}
            </Text>
        </View>
        <Image source={require('../assets/kwadrat.png')} style={[{transform: [{ scale: this.state.sliderValue * 0.01 }]}]}/> 
      </View>
    );
  }
}

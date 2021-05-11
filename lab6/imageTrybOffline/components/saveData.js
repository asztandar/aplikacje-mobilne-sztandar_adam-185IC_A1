import React from "react";
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  View,
  Switch,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import styles from "../style/stylesheet";
import NetInfo from "@react-native-community/netinfo";

export default class SaveData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connection: true,
      local: "",
      remote: "",
      internet: false,
    };
  }
  handleSlider = async (value) => {
    const key = "local";
    await AsyncStorage.setItem(key, value.toString());
    const tempValue = await AsyncStorage.getItem(key);
    if (tempValue !== null) {
      this.setState({ local: tempValue });
    } else {
      this.setState({ local: "" });
    }
  };
  // funkcja sprawdzająca integralnośc danych lokalnych i zdalnych
  checkData = () => {
    if (this.state.connection) this.setState({ remote: this.state.local });
  };


  internetConnect = () => {
    NetInfo.addEventListener((state) => {
        this.setState({internet: state.isConnected})
      });

  }
  componentDidMount() {
    setInterval(this.checkData, 5000);
    this.internetConnect();
  }
  render() {
    return (
      <View style={styles.asyncStorContainer}>
        <Text>Subtask przedostatni oraz ostatni</Text>
        <View>
          <Text>
              Status internetu: 
            {this.state.connection
              ? ` Połączono `
              : ` Brak połączenia z internetem`}
            
          </Text>
          <Switch
            value={this.state.connection}
            onValueChange={(val) => {
              this.setState({ connection: val });
            }}
          />
        </View>
        <View>
          <Text>Przesuń slider aby ustawić wartości </Text>
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
          <Text>Wartości lokalne:</Text>
          <Text>{this.state.local}</Text>
          <Text>Wartości zdalne:</Text>
          <Text>{this.state.remote}</Text>
        </View>
      </View>
    );
  }
}

import React, { useState } from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import styles from "../style/stylesheet";

class SelectExample extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSeason: "",
      selectedMonth: "",
      pickerItems: [<Picker.Item label="Wybierz porę roku" value="" key="nothing"/>],
      sentence: "",
    };
  }


  setPickerItems = (season) => {
    console.log("season: ", {season})
    if (season === "") {
      const renderElements = [ <Picker.Item label="Wybierz porę roku" value="" key="nothing"/> ]
      this.setState({ pickerItems: renderElements });
    } else if (season === "spring") {
      const renderElements = [
            <Picker.Item label="Marzec" value="march" key="march"/>,
            <Picker.Item label="Kwiecień" value="april" key="april"/>,
            <Picker.Item label="Maj" value="may" key="may"/>
      ]
      this.setState({ pickerItems: renderElements });
    } else if (season === "summer") {
      console.log("to jest lato")
      const renderElements = [
            <Picker.Item label="Czerwiec" value="june" key="june"/>,
            <Picker.Item label="Lipiec" value="july" key="july"/>,
            <Picker.Item label="Sierpień" value="august" key="august"/>
      ]
      this.setState({ pickerItems: renderElements });
    } else if (season === "autumn") {
      const renderElements = [
            <Picker.Item label="Wrzesień" value="september" key="september"/>,
            <Picker.Item label="Październik" value="october" key="october"/>,
            <Picker.Item label="Listopad" value="november" key="november"/>
      ]
      this.setState({ pickerItems: renderElements });
    } else if (season === "winter") {
      const renderElements = [
        <Picker.Item label="Grudzień" value="december" key="december"/>,
        <Picker.Item label="Styczeń" value="january" key="january"/>,
        <Picker.Item label="Luty" value="february" key="february"/>
      ]
           
      this.setState({ pickerItems: renderElements });
    }
  };

  setSentence = (selectedMonth) =>{
    
    this.setState({selectedMonth})
    console.log("selMon: ", this.state.selectedMonth)
    const sentence = "Your season is " + this.state.selectedSeason + " and your month is " + selectedMonth;
    this.setState({ sentence: sentence})
  }

  render() {
    return (
      <View style={styles.containerSelect}>
        <View style={styles.selectHeader}>
          <Text style={styles.textCenter}>
            Picker - Twoja pora roku i miesiąc urodzenia
          </Text>
        </View>
        <View style={styles.selectWrapper}>
          <Text>Krok 1. Wybierz porę roku:</Text>
          <View style={styles.pickerView}>
            <Picker
              style={styles.picker}
              mode={"dropdown"}
              selectedValue={this.state.selectedSeason}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ selectedSeason: itemValue });
                this.setPickerItems(itemValue);
              }}
            >
              <Picker.Item label="Wybierz" value="" />
              <Picker.Item label="Wiosna" value="spring" />
              <Picker.Item label="Lato" value="summer" />
              <Picker.Item label="Jesień" value="autumn" />
              <Picker.Item label="Zima" value="winter" />
            </Picker>
          </View>
          <Text>Krok 2. Wybierz miesiąc:</Text>
          <View style={styles.pickerView}>
            <Picker
              style={styles.picker}
              mode={"dropdown"}
              selectedValue={this.state.selectedMonth}
              onValueChange={(itemValue2, itemIndex) =>{
                console.log({itemValue2})
                this.setState({ selectedMonth: itemValue2 })
                this.setSentence(itemValue2);
              }
              }
            >
              {this.state.pickerItems}
            </Picker>
          </View>
        </View>
        <Text style={styles.textCenter}>
          {this.state.sentence}
        </Text>
      </View>
    );
  }
}

export default SelectExample;

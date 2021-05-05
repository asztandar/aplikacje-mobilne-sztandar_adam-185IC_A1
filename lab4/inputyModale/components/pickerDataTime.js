import React, { Component } from 'react';
import { Text, View } from "react-native";
import DatePicker from 'react-native-datepicker';

import styles from "../style/stylesheet";

export default class PickerDataTime extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return (
        <View style={styles.containerSelect}>
            <View style={styles.toCenter}>
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2022-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
            this.setState({date: date})
            alert("Ustawiona data: \n" + this.state.date)
        }}
      />
      </View>
      </View>
    )
  }
}
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.state = {
      operationsText: "",
      resultText: "",
    };
    this.operations = ["<", "+", "-", "*", "/","<=>","C"];
    this.handP = true;
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  calculationResult() {
    const text = this.state.operationsText;
    this.setState({
      resultText: eval(text),
    });
  }

  validate() {
    const text = this.state.operationsText;
    switch (text.slice(-1)) {
      case "+":

      case "-":

      case "*":

      case "/":
        return false;
    }
    return true;
  }

  handlePressButton(text) {
    console.log(text);

    if (text == "=") {
      return this.validate() && this.calculationResult(this.state.operationsText);
    }

    this.setState({
      operationsText: this.state.operationsText + text,
    });
    console.log("textResult: ", this.state.resultText)
    console.log("textOperations: ", this.state.operationsText)
    if(this.state.operationsText + text == "21663") {
      alert("Autor: Adam Sztandar\nLaboratorium: 1\nIndeks: 21663\nGrupa: 185IC A1");
      this.setState({
        operationsText: ""
      });
    }
  }

  operate(operation) {
    switch (operation) {
      case "<=>":
        this.handP = (!this.handP)
        console.log("click <=>", this.handP)
        this.forceUpdateHandler()
        break;

      case "C":
        this.setState({ operationsText : ""})
        this.setState({ resultText : ""})
      break;
      case "<":
        console.log(this.state.operationsText);
        let text = this.state.operationsText.split("");
        text.pop();
        this.setState({
          operationsText: text.join(""),
        });
        break;
      case "+":

      case "-":

      case "*":

      case "/":
        const lastChar = this.state.operationsText.split("").pop();

        if (this.operations.indexOf(lastChar) > 0) return;

        if (this.state.text == "") return;
        this.setState({
          operationsText: this.state.operationsText + operation,
        });
    }
  }


  render() {
    let rows = [];
    let nums = [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      ["=", 0, ","],
    ];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            key={nums[i][j]}
            style={styles.btn}
            onPress={() => this.handlePressButton(nums[i][j])}
          >
            <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        );
      }
      rows.push(
        <View key={i} style={styles.row}>
          {row}
        </View>
      );
    }

    let ops = [];
    for (let i = 0; i < 7; i++) {
      if(this.operations[i] == "C") ops.push(
        <TouchableOpacity
          key={this.operations[i]}
          style={styles.btn}
          onPress={() => this.operate(this.operations[i])}
        >
          <Text style={[styles.btnText, styles.black]}>
            {this.operations[i]}
          </Text>
        </TouchableOpacity>
      );
      else ops.push(
        <TouchableOpacity
          key={this.operations[i]}
          style={styles.btn}
          onPress={() => this.operate(this.operations[i])}
        >
          <Text style={[styles.btnText, styles.white]}>
            {this.operations[i]}
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.operationsText}>{this.state.operationsText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.resultText}>
            {this.state.resultText}{" "}
          </Text>
        </View>
        <View style={styles.buttons}>

      {this.handP ? 
      [
        <View style={styles.operations} key="1">{ops}</View>,
        <View style={styles.numbers} key="2">{rows}</View>
      ]
      :
      [
        <View style={styles.numbers} key="3">{rows}</View>,
        <View style={styles.operations} key="4">{ops}</View>
      ]
    }

          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  operationsText: {
    fontSize: 25,
    paddingRight: 10,
    color: "black",
  },
  btnText: {
    fontSize: 40,
    color: "white",
  },
  white: {
    color: "white",
  },
  black: {
    color: "black",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  devider: {
    borderRightColor: "yellow",
    borderBottomColor: "yellow",
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  result: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  calculation: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  resultText: {
    fontSize: 50,
    paddingRight: 10,
    color: "black",
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
  },
  numbers: {
    flex: 3,
    padding: 1,
    backgroundColor: "#1e2326",
  },
  operations: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "stretch",
    backgroundColor: "#9ed8b3",
  },
});

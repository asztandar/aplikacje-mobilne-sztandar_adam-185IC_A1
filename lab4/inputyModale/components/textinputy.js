import React, { useState } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";

import styles from "../style/stylesheet";
const TextInputy = (props) => {
  const [text1, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  return (
    <View style={styles.textInputContainer}>
      <View style={styles.textInputHeader}>
        <Text style={styles.textCenter}>TextInput oraz jego propsy:</Text>
      </View>
      <View style={styles.textInputWrapperContent}>
        <ScrollView>
          <View style={styles.textInputExample}>
            <Text>placeholder + multiline</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Wprowadź tekst"
              multiline={true}
              onChangeText={(text1) => setText(text1)}
            />
            <Text>Wartość wprowadzona: {text1}</Text>
          </View>
          <View style={styles.textInputExample}>
            <Text>defaultValue + editable(false)</Text>
            <TextInput
              style={styles.textInput}
              defaultValue="wartość domyślna"
              editable={false}
              onChangeText={(text2) => setText2(text2)}
            />
            <Text>Wartość wprowadzona: {text2}</Text>
          </View>
          <View style={styles.textInputExample}>
            <Text>maxLength + autoCapitalize</Text>
            <TextInput
              style={styles.textInput}
              maxLength= {10}
              autoCapitalize='characters'
              onChangeText={(text3) => setText3(text3)}
            />
            <Text>Wartość wprowadzona: {text3}</Text>
          </View>
          <View style={styles.textInputExample}>
            <Text>keyboardType</Text>
            <TextInput
              style={styles.textInput}
              keyboardType='number-pad'
              onChangeText={(text4) => setText4(text4)}
            />
            <Text>Wartość wprowadzona: {text4}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TextInputy;

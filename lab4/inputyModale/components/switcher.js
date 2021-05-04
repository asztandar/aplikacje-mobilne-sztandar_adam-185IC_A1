import React, { useState } from "react";
import { Text, View, Switch, Modal } from "react-native";
//import Modal from "react-native-modal";

import styles from "../style/stylesheet";
const Switcher = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.containerSelect}>
      <View style={styles.selectHeader}>
        <Text style={styles.textCenter}>Przełącz mnie a wylosuje liczbę!</Text>
      </View>
      <View style={styles.switchContent}>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={isSwitchOn}
          onRequestClose={() => {
            setModalVisible(!isSwitchOn);
          }}
        >
          <View style={styles.viewModalContent}>
            <View style={styles.modalView}>
              <Text style={styles.modalText} onPress={onToggleSwitch}>
                {Math.floor(Math.random() * 100)}
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Switcher;

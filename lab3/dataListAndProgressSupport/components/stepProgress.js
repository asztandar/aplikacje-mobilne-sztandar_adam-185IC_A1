import React from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import styles from "../style/stylesheet";
const StepProgress = (props) => {
    const buttonTextStyle = {
        color: '#'
    };
  return (
    <View style={styles.containerStep}>
      <View style={styles.headerStep}>
      <ProgressSteps
        completedProgressBarColor="#edf869"
        completedStepIconColor="#e3b56f"
        activeStepIconBorderColor="#3ec133"
        activeLabelColor="#3ec133"
      >
            <ProgressStep label="Pierwsze" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                <View style={{ alignItems: 'center' }, styles.wysrodkuj}>
                    <Text>ActivityIndicator bez ustawień: </Text>
                        <ActivityIndicator />
                </View>
            </ProgressStep>
            <ProgressStep label="Drugie" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                <View style={{ alignItems: 'center' }, styles.wysrodkuj}>
                <Text>ActivityIndicator bez ustawień: </Text>
                    <ActivityIndicator size="large" color="#c7a343" />
                </View>
            </ProgressStep>
            <ProgressStep label="Trzecie" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
                <View style={{ alignItems: 'center' }, styles.wysrodkuj}>
                <Text>ActivityIndicator bez ustawień: </Text>
                    <ActivityIndicator size="medium" color="#bc251d" />
                </View>
            </ProgressStep>
        </ProgressSteps>
      </View>
    </View>
  );
};

export default StepProgress;

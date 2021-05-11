import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "../style/stylesheet";

const netInfo = () => {
  const [netInfo, setNetInfo] = useState("");
  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(
        `
        Typ połączenia: ${state.type}
        Podłączony: ${state.isConnected ? "tak" : "nie"}
        IP Address: ${state.details.ipAddress}
        SSID: ${state.details.ssid}
        Siła: ${state.details.strength}
        Maska: ${state.details.subnet}
        Moduł wifi: ${state.isWifiEnabled ? "włączony" : "wyłączony"}
        `
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={styles.netInfoContainer}>
      <View>
        <Text>NetInfo:</Text>
        <View style={styles.netInfoContent}>
          <Text>
            {netInfo}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default netInfo;

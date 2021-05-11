import React, { useState, useEffect } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "../style/stylesheet";

const isConnect = () => {
  const [netInfo, setNetInfo] = useState("");
  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(
        state.isConnected
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return netInfo;
};
export default isConnect;

import React from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text>c1</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Press me" />
      <Image
        style={{ height: 200, width: 100 }}
        source={require("../image/1.jpg")}
      />
      <Image
        style={{ height: 200, width: 100 }}
        source={require("../image/1.jpg")}
      />
      <Image
        style={{ height: 200, width: 100 }}
        source={require("../image/1.jpg")}
      />
      <Image
        style={{ height: 200, width: 100 }}
        source={require("../image/1.jpg")}
      />
      <Image
        style={{ height: 200, width: 100 }}
        source={require("../image/1.jpg")}
      />
      <Image
        style={{ height: 200, width: 100 }}
        source={require("../image/1.jpg")}
      />
      <Image
        style={{ height: 200, width: 100 }}
        source={require("../image/1.jpg")}
      />
      <Image
        style={{ height: 200, width: 100 }}
        source={require("../image/1.jpg")}
      />
      <Image
        style={{ height: 200, width: 100 }}
        source={require("../image/1.jpg")}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

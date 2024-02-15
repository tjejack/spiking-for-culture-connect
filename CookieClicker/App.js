import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Form from "./Form";

export default function App() {
  const [counter, setCounter] = useState(0);
  function cookieUp() {
    setCounter((currentCount) => currentCount+1);
  }
  function cookieDown() {
    setCounter((currentCount) => currentCount-1);
  }
  return (
    <View style={styles.container}>
      <Text>Cookie clicker</Text>
      <Button title='Click me!' onPress={cookieUp}></Button>
      <Button title='Dont Click me!' onPress={cookieDown}></Button>
      <Text>{counter}</Text>
      <Form setCounter={setCounter}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

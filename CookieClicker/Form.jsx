import { useState } from "react";
import { Text, Button } from "react-native";

export default function Form({setCounter}) {
  function cookieWild() {
    const randInt = Math.ceil(Math.random() * 10)
    setCounter((currentCount) => currentCount+randInt);
  }
  return (
    <>
      <Button title='Wooo' onPress={cookieWild}></Button>
    </>
  );
}

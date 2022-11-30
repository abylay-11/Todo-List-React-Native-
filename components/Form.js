import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function Form({ addTask }) {
  const [text, setText] = useState("");

  const onChange = (text) => {
    setText(text);
  };

  const onPress = async () => {
    addTask(text);
    setText("");
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={onChange}
        placeholder="Пишите задачу"
        value={text}
      ></TextInput>
      <Button
        color={"green"}
        onPress={onPress}
        title="Добавить задачу"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginVertical: 30,
    marginHorizontal: "20%",
    width: "60%",
  },
});

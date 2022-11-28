// import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import React, { useCallback } from "react";

export default function App() {
  const handleButtonPress = () => {
    // alert("text");

    Alert.alert("title", "message", [
      {
        text: "Yes",
        onPress: () => {
          console.log("Yes");
        },
      },
      {
        text: "No",
        onPress: () => {
          console.log("No");
        },
      },
    ]);
  };

  const handleButtonPress2 = () => {
    // alert("text");

    Alert.prompt("title", "message", (text) => {
      console.log(text);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text onPress={() => console.log("Text pressed")}>Hello world</Text>
        <Button
          title="Button"
          color={"red"}
          onPress={handleButtonPress}
        ></Button>
      </View>
      <Button
        title="Button 2"
        color={"red"}
        onPress={handleButtonPress2}
      ></Button>
      <TouchableWithoutFeedback onPress={handleButtonPress}>
        <Image
          blurRadius={2}
          source={{
            width: 200,
            height: 200,
            uri: "https://images.unsplash.com/photo-1598209279122-8541213a0387?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80",
          }}
        ></Image>
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "grey",
    marginTop: StatusBar.currentHeight,
    // alignItems: "center",
    // justifyContent: "center",
  },
  inner: {
    // backgroundColor: "blue",
  },
});

import React, { useState, useCallback } from "react";
import { Text, StyleSheet } from "react-native";

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = "This is not a really a bird nest.";

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    // fontFamily: "Inter-Black",
    fontFamily: "Inter-SemiBoldItalic",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "Inter-Black-Italic",
  },
});

export default TextInANest;

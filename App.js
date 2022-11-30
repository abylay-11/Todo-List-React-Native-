import { View, StyleSheet, FlatList, Text } from "react-native";
import React, { useState } from "react";

// * Components
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "Buy a milk", index: 1 },
    { text: "Buy a milk 2", index: 2 },
    { text: "Buy a milk 3", index: 3 },
    { text: "Buy a milk 4", index: 4 },
  ]);

  const addTask = (text) => {
    setListOfItems((list) => {
      const index = list.length + 1;
      return [{ text: text, index: index }, ...list];
    });
  };
  const deleteHandler = (index) => {
    setListOfItems((list) => {
      return list.filter((item) => item.index !== index);
    });
  };

  return (
    <View>
      <Header></Header>
      <Form addTask={addTask}></Form>
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => {
            return (
              <ListItem el={item} deleteHandler={deleteHandler}></ListItem>
            );
          }}
          keyExtractor={(item) => item.index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

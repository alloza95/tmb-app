import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

export default ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Searchbar
      placeholder="On vols anar?"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

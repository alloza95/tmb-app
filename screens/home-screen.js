import React, { useState } from "react";
import { Searchbar } from 'react-native-paper';
import { View, Text } from "react-native";

export default ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View>
      <Searchbar
        placeholder="On vols anar?"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Text>Inici</Text>
    </View>
  )
};

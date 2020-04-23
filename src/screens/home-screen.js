import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FAB, Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles } from "../styles";

export default ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView>
      <View style={appStyles.container}>
        <Searchbar
          placeholder="On vols anar?"
          icon="menu"
          onChangeText={setSearchQuery}
          value={searchQuery}
          onIconPress={() => navigation.toggleDrawer()}
        />
        <FAB style={styles.fab} icon="crosshairs-gps" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

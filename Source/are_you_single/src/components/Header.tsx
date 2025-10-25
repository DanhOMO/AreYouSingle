import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

const Header = () => {
  return (
    <View style={style.header}>
      <TouchableOpacity>
        <Ionicons name="menu" size={26} color={"#FF4F81"} />
      </TouchableOpacity>
      <Text style={style.headerTitle}>HeartSync</Text>
      <TouchableOpacity>
        <Ionicons name="filter-circle-sharp" size={26} color={"#FF4F81"} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#FF4F81" },
});

export default Header;

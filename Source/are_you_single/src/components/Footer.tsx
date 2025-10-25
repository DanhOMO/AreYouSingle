import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

const Footer = () => {
  return (
    <View style={style.barContainer}>
      <TouchableOpacity style={style.iconButton}>
        <Ionicons name="person-outline" size={26} color="#FF6B9A" />
        <Text style={style.iconLabel}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.iconButton}>
        <Ionicons name="people-outline" size={26} color="#FF6B9A" />
        <Text style={style.iconLabel}>People</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.iconButton}>
        <Ionicons name="heart-outline" size={26} color="#FF6B9A" />
        <Text style={style.iconLabel}>Liked You</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.iconButton}>
        <Ionicons name="chatbubble-outline" size={26} color="#FF6B9A" />
        <Text style={style.iconLabel}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  barContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#FF6B9A",
    paddingBottom: 20,
  },
  iconButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  iconLabel: { color: "#FF6B9A", fontSize: 12, marginTop: 4 },
});

export default Footer;

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuthStore } from "../store/useAuthStore";
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";
import * as SecureStore from "expo-secure-store";
import { View, ActivityIndicator } from "react-native"; // Để hiển thị màn hình loading

export default function RootNavigator() {
  // Lấy token từ store
  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);
  const [isLoading, setIsLoading] = useState(true);

  // Kiểm tra token đã lưu trong điện thoại khi mở app
  useEffect(() => {
    const loadToken = async () => {
      try {
        const tokenFromStorage = await SecureStore.getItemAsync("userToken");
        if (tokenFromStorage) {
          setToken(tokenFromStorage); // Cập nhật token vào store
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    loadToken();
  }, []);

  // Hiển thị màn hình loading trong khi kiểm tra token
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Quyết định hiển thị luồng nào
  return (
    <NavigationContainer>
      {token ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
}

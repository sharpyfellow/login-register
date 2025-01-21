import React from "react";
import { Button, Text, View, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    await AsyncStorage.removeItem("jwtToken");
    Alert.alert("Logout successful");
    navigation.navigate("Login");
  };

  return (
    <View>
      <Text>Ahoy! Welcome to the treasure cove!</Text>
      <Button title="Abandon Ship (Logout)" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

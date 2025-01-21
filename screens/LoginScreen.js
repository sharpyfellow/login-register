import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.3.161:3000/login", {
        email,
        password,
      });
      await AsyncStorage.setItem("jwtToken", response.data.token);
      Alert.alert("Login successful");
      console.log(response.data.token);
      navigation.navigate("Home");
    } catch (error) {
      alert("Arrr matey! No treasure found. (Invalid credentials)");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="email"
        style={styles.textInput}
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{ marginTop: 12 }}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;

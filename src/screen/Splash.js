import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   setTimeout(() => {
  //     getData();
  //   }, 3000);
  // }, []);

  // const getData = async () => {
  //   const email = await AsyncStorage.getItem("EMAIL");
  //   if (email !== null) {
  //     navigation.navigate("Home");
  //   } else {
  //     navigation.navigate("Login");
  //   }
  // };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Image
        source={require("../images/logo_splash.jpg")}
        style={{
          backgroundColor: "#000",
          marginTop: -200,
          width: 200,
          height: 200,
          borderRadius: 100,
          resizeMode: "center",
        }}
      />
      <Text
        style={{
          marginTop: 0,
          marginLeft: -110,
          padding: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          textDecorationLine: "underline",
          fontSize: 18,
          color: "#fff",
        }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Đăng nhập
      </Text>
      <Text
        style={{
          marginTop: -24,
          marginLeft: 0,
          padding: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: 18,
          color: "#fff",
        }}
      >
        /
      </Text>
      <Text
        style={{
          marginTop: -24,
          marginLeft: 90,
          padding: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          textDecorationLine: "underline",
          fontSize: 18,
          color: "#fff",
        }}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        Đăng ký
      </Text>
    </View>
  );
};

export default Splash;

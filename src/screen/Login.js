import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../common/Loader";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const login = () => {
    setModalVisible(true);
    if (email == "") {
      setModalVisible(false);
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == "") {
        setModalVisible(false);
        setBadPassword(true);
      } else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  };

  const getData = async () => {
    const mEmail = await AsyncStorage.getItem("EMAIL");
    const mPass = await AsyncStorage.getItem("PASSWORD");

    if (email === mEmail && mPass === password) {
      setModalVisible(false);
      navigation.navigate("Home");
    } else {
      setModalVisible(false);
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require("../images/logo.jpg")}
        style={{ width: 150, height: 150, alignSelf: "center", marginTop: 10 }}
      />
      <Text
        style={{
          marginTop: -20,
          alignSelf: "center",
          fontSize: 24,
          fontWeight: "700",
          color: "#000",
        }}
      >
        ĐĂNG NHẬP
      </Text>
      <CustomTextInput
        placeholder={"Nhập tài khoản"}
        icon={require("../images/user.png")}
        value={email}
        onChangeText={(txt) => {
          setEmail(txt);
        }}
      />
      {badEmail === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
          Vui lòng nhập tài khoản
        </Text>
      )}
      <CustomTextInput
        type={"passwpord"}
        placeholder={"Nhập mật khẩu"}
        icon={require("../images/lock.png")}
        value={password}
        onChangeText={(txt) => {
          setPassword(txt);
        }}
      />
      {badPassword === true && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
          Vui lòng nhập mật khẩu
        </Text>
      )}
      <CommonButton
        title={"ĐĂNG NHẬP"}
        bgColor={"#000"}
        textColor={"#fff"}
        fontWeight={"bold"}
        onPress={() => {
          login();
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: "400",
          alignSelf: "center",
          marginTop: 20,
          textDecorationLine: "underline",
        }}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        Đăng ký tài khoản?
      </Text>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default Login;

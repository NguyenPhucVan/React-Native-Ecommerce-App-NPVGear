import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
let isValid = true;
const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [badMobile, setBadMobile] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const signup = () => {
    setButtonDisabled(true);

    if (name == "") {
      setBadName(true);
      setButtonDisabled(false);
    } else {
      setBadName(false);
      if (email == "") {
        setBadEmail(true);
        setButtonDisabled(false);
      } else {
        setBadEmail(false);
        if (mobile == "") {
          setBadMobile(true);
          setButtonDisabled(false);
        } else if (mobile.length < 10) {
          setBadMobile(true);
          setButtonDisabled(false);
        } else {
          setBadMobile(false);
          if (password == "") {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword == "") {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              if (password !== confirmPassword) {
                setBadConfirmPassword(true);
                setButtonDisabled(false);
              } else {
                setBadConfirmPassword(false);
                saveData();
              }
            }
          }
        }
      }
    }
  };
  const saveData = async () => {
    await AsyncStorage.setItem("NAME", name);
    await AsyncStorage.setItem("EMAIL", email);
    await AsyncStorage.setItem("MOBILE", mobile);
    await AsyncStorage.setItem("PASSWORD", password);
    console.log(":yes");
    navigation.goBack();
  };
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../images/logo.jpg")}
          style={{
            width: 150,
            height: 150,
            alignSelf: "center",
            marginTop: 10,
          }}
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
          ĐĂNG KÝ
        </Text>
        <CustomTextInput
          placeholder={"Nhập họ tên"}
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
          icon={require("../images/user.png")}
        />
        {badName === true ? (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Vui lòng nhập họ tên
          </Text>
        ) : null}
        <CustomTextInput
          placeholder={"Nhập tên tài khoản"}
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
          icon={require("../images/user.png")}
        />
        {badEmail === true ? (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Vui long nhập tên tài khoản
          </Text>
        ) : null}

        <CustomTextInput
          placeholder={"Nhập số điện thoại"}
          value={mobile}
          keyboardType={"number-pad"}
          onChangeText={(txt) => {
            setMobile(txt);
          }}
          icon={require("../images/phone.png")}
        />
        {badMobile === true ? (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Vui lòng nhập số điện thoại
          </Text>
        ) : null}
        <CustomTextInput
          value={password}
          onChangeText={(txt) => {
            setPassword(txt);
          }}
          placeholder={"Nhập mật khẩu"}
          icon={require("../images/lock.png")}
        />
        {badPassword === true ? (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Vui lòng nhập mật khẩu
          </Text>
        ) : null}
        <CustomTextInput
          value={confirmPassword}
          onChangeText={(txt) => {
            setConfirmPassword(txt);
          }}
          placeholder={"Nhập lại mật khẩu"}
          icon={require("../images/lock.png")}
        />
        {badConfirmPassword === true ? (
          <Text style={{ marginTop: 10, marginLeft: 30, color: "red" }}>
            Mật khẩu nhập lại không khớp
          </Text>
        ) : null}
        <CommonButton
          title={"ĐĂNG KÝ"}
          bgColor={buttonDisabled ? "#8e8e8e" : "#000"}
          textColor={"#fff"}
          onPress={() => {
            signup();
          }}
          disabled={buttonDisabled}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            alignSelf: "center",
            marginTop: 20,
            textDecorationLine: "underline",
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Bạn đã có tài khoản?
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;

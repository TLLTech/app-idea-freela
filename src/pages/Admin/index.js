import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  Picker
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

import {
  Container,
  Content,
  ButtonRegister,
  ContentInput,
  Input,
  Title,
  ImageProfile,
  ButtonRegisterText,
  ImageView
} from "./styles";

import Header from "../../components/Header";
import api from "../../services/api";

export default function Admin({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const [selectSports, setSelectSports] = useState("");

  useEffect(() => {
    getPermissionAsync();
  }, []);

  async function getPermissionAsync() {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Soorrry, we need");
      }
    }
  }

  async function _pickerImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  async function handleRegister() {
    setLoading(true);
    try {
      await api
        .database()
        .ref("users")
        .set({
          name,
          email,
          desc
        });

      setTimeout(() => {
        setName("");
        setEmail("");
        setDesc("");

        setLoading(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container>
      <Header navigation={navigation} title="ADD USER" />

      <Content>
        <Title>ADD USER</Title>
        <ImageProfile onPress={_pickerImage}>
          {image && <ImageView source={{ uri: image }} />}
        </ImageProfile>
        <ContentInput>
          <Input
            placeholder="name of the profile"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#000"
          />
        </ContentInput>
        <ContentInput>
          <Input
            placeholder="email (optional at the beginning)"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#000"
          />
        </ContentInput>
        <ContentInput>
          <Input
            placeholder="Description"
            value={desc}
            onChangeText={setDesc}
            placeholderTextColor="#000"
          />
        </ContentInput>

        <Picker
          selectedValue={setSelectSports}
          style={{ height: 50, width: 50 }}
          onValueChange={(itemValue, itemIndex) => setSelectSports(itemValue)}
        >
          <Picker.Item label="exemplo" value="exemplo" />
          <Picker.Item label="exemplo" value="exemplo" />
          <Picker.Item label="exemplo" value="exemplo" />
        </Picker>

        <ButtonRegister onPress={handleRegister}>
          {loading ? (
            <ActivityIndicator size={25} color="#fff" />
          ) : (
            <ButtonRegisterText>REGISTER</ButtonRegisterText>
          )}
        </ButtonRegister>
      </Content>
    </Container>
  );
}

Admin.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Icon name="assignment-ind" size={30} color="#000" />
  )
};

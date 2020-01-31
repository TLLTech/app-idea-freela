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
  ImageView,
  PickerCountry,
  ContentPicker
} from "./styles";

import Header from "../../components/Header";
import api from "../../services/api";

export default function Admin({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  // select
  const [country, setCountry] = useState("");
  const [sports, setSports] = useState("");
  // const [selectSports, setSelectSports] = useState("");

  const dataSports = [
    "Fútbol",
    "Baloncesto",
    "Tenis",
    "Balonmano",
    "Fútbol americano",
    "Rugby",
    "Fútbol sala",
    "Boxeo",
    "UFC",
    "Béisbol",
    "Hockey",
    "Golf",
    "Caballos",
    "Ciclismo",
    "Motor",
    "Dardos",
    "Voleibol",
    "Waterpolo",
    "eSports"
  ];

  const dataCountry = [
    "Argentina",
    "Bolivia",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Ecuador",
    "El salvador",
    "España",
    "Guatemala",
    "Guinea Ecuatorial",
    "Honduras",
    "México",
    "Nicaragua",
    "Panamá",
    "Paraguay",
    "Perú",
    "República dominicana",
    "Uruguay",
    "Venezuela"
  ];

  useEffect(() => {
    getPermissionAsync();
  }, []);

  async function uploadPhoto(uri) {
    try {
      const snapshot = await api
        .storage()
        .ref()
        .child("images")
        .child("image.jpeg")
        .putString(uri)
        .then(res => console.log(res))
        .catch(err => console.log(err));

      console.log(snapshot.downloadURL);
    } catch (err) {
      console.log(err);
    }
  }

  function uploadImage(blob) {
    try {
      const storageRef = api.storage().ref();

      storageRef
        .child("uploads/photo.jpg")
        .put(blob, {
          contentType: "image/jpeg"
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

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
      quality: 1,
      base64: true
    });

    // const { height, width, type, uri } = result;

    if (!result.cancelled) {
      uploadPhoto(result.base64);
    }
  }

  async function handleRegister() {
    setLoading(true);
    console.log(country);
    console.log(sports);

    try {
      const users = api.database().ref("users");
      const chave = users.push().key;

      users.child(chave).set({
        name,
        email,
        desc,
        country,
        sports
        // setImage
      });

      setTimeout(() => {
        setName("");
        setEmail("");
        setDesc("");
        setCountry("");
        setSports("");
        setImage(null);

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
          />
        </ContentInput>
        <ContentInput>
          <Input
            placeholder="email (optional at the beginning)"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </ContentInput>
        <ContentInput>
          <Input
            placeholder="Description"
            value={desc}
            onChangeText={setDesc}
          />
        </ContentInput>

        <PickerCountry
          selectedValue={country}
          onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
        >
          <Picker.Item label="Select Country" />
          {dataCountry.map(item => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </PickerCountry>

        <PickerCountry
          selectedValue={sports}
          onValueChange={(itemValue, itemIndex) => setSports(itemValue)}
        >
          <Picker.Item label="Select Sports" />
          {dataSports.map(item => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </PickerCountry>

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

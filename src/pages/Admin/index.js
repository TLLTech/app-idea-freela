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

// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = RNFetchBlob.polyfill.Blob;

export default function Admin({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [chaves, setChave] = useState(0);
  const [stars, setStars] = useState(null);
  const [comment, setComment] = useState(null);
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
    const geradorChave = api.database().ref("users");
    const chave = geradorChave.push().key;
    setChave(chave);

    getPermissionAsync();
  }, []);

  // async function uploadPhoto(uri) {
  //   try {
  //     const snapshot = await api
  //       .storage()
  //       .ref()
  //       .child("images")
  //       .child("image.jpeg")
  //       .putString(uri)
  //       .then(res => console.log(res))
  //       .catch(err => console.log(err));

  //     console.log(snapshot.downloadURL);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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
      const name = Math.floor(Math.random() * 65536);

      setImage(result.uri);
      uploadImage(result.uri)
        .then(res => console.log(res, "Deu Upload"))
        .catch(err => console.log(err, "Deu Erro"));
    }
  }

  async function uploadImage(uri) {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = api
        .storage()
        .ref()
        .child("images/" + chaves);
      return ref.put(blob);
    } catch (err) {
      console.log(err);
    }

    // const avatar = api
    //   .storage()
    //   .ref("users/")
    //   .child(chaves);
    // const mime = "image/jpeg";
    // RNFetchBlob.fs
    //   .readFile(uri, "base64")
    //   .then(data => {
    //     return RNFetchBlob.polyfill.Blob.build(data, {
    //       type: mime + ";BASE64"
    //     });
    //   })
    //   .then(blob => {
    //     avatar.put(blob, { contentType: mime }).on(
    //       "state_changed",
    //       snapshot => {},
    //       err => {
    //         console.log(err);
    //       },
    //       () => {
    //         console.log("Usuario cadastrado");
    //       }
    //     );
    //   });
  }

  async function handleRegister() {
    setLoading(true);
    console.log(country);
    console.log(sports);

    try {
      const users = api.database().ref("users");
      // const chave = users.push().key;
      // setChave(chave);

      users.child(chaves).set({
        name,
        email,
        desc,
        country,
        sports,
        stars,
        comment
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

  console.log(chaves);
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

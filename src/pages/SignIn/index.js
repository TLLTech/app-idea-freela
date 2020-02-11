import React, { useState } from "react";
import { Text, AsyncStorage } from "react-native";
import * as Google from "expo-google-app-auth";

import google_icon from "../../img/google-icon.png";

import {
  Container,
  ButtonSignIn,
  ButtonImage,
  ButtonSignInText,
  TextInit
} from "./styles";

const IOS_CLIENT_ID =
  "672834519180-2uhmmm53am29631b23222mtmmtg01h9r.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "672834519180-4kofco98prgver0fc7ec47bejhnq61vv.apps.googleusercontent.com";

export default function SignIn({ navigation }) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  async function signWithGoogle() {
    try {
      const result = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        console.log("login", result.user);

        setUserName(result.user.name);
        setEmail(result.user.email);
        setImageUrl(result.user.photoUrl);

        navigation.navigate("Dashboard");
        try {
          await AsyncStorage.setItem("@login:username", result.user.name);
          await AsyncStorage.setItem("@login:email", result.user.email);
          await AsyncStorage.setItem("@login:imageUrl", result.user.photoUrl);
        } catch (err) {
          console.log(err);
        }

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleDash() {
    navigation.navigate("Dashboard");
  }

  console.log(username);
  console.log(email);
  console.log(imageUrl);

  return (
    <Container>
      <TextInit>Welcome Message</TextInit>
      <ButtonSignIn onPress={signWithGoogle}>
        <ButtonImage source={google_icon} />
        <ButtonSignInText>BEGIN SESSION</ButtonSignInText>
      </ButtonSignIn>
    </Container>
  );
}

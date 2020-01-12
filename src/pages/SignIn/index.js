import React from "react";
import { Text } from "react-native";

import google_icon from "../../img/google-icon.png";
import {
  Container,
  ButtonSignIn,
  ButtonImage,
  ButtonSignInText,
  TextInit
} from "./styles";

export default function SignIn({ navigation }) {
  function handleDash() {
    navigation.navigate("Dashboard");
  }

  return (
    <Container>
      <TextInit>Welcome Message</TextInit>
      <ButtonSignIn onPress={handleDash}>
        <ButtonImage source={google_icon} />
        <ButtonSignInText>BEGIN SESSION</ButtonSignInText>
      </ButtonSignIn>
    </Container>
  );
}

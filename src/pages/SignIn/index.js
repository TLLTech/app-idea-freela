import React from "react";
import { Text } from "react-native";

import { Container, ButtonSignIn } from "./styles";

export default function SignIn({ navigation }) {
  function handleDash() {
    navigation.navigate("Dashboard");
  }

  return (
    <Container>
      <Text>Heeloo</Text>
      <ButtonSignIn onPress={handleDash}>
        <Text>Dashboard</Text>
      </ButtonSignIn>
    </Container>
  );
}

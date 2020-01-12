import React from "react";
import { Text } from "react-native";

import { Container } from "./styles";

export default function Contact() {
  return (
    <Container>
      <Text>Contact</Text>
    </Container>
  );
}

Contact.navigationOptions = {
  drawerLabel: "Contact"
};

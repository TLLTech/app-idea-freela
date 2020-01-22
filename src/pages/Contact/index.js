import React from "react";
import { Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import { Container } from "./styles";

import Header from "../../components/Header";

export default function Contact({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} title="Contacts" />

      <Text>Contact</Text>
    </Container>
  );
}

Contact.navigationOptions = {
  drawerLabel: "Contact",
  drawerIcon: ({ tintColor }) => <Icon name="send" size={30} color="#000" />
};

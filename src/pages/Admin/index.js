import React, { useState } from "react";
import { Text, View, ScrollView, ActivityIndicator } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import {
  Container,
  Content,
  ButtonRegister,
  ContentInput,
  Input,
  Title,
  ImageProfile,
  ButtonRegisterText
} from "./styles";

import Header from "../../components/Header";
import api from "../../services/api";

export default function Admin({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    try { 
      const ref = api.firestore().collection('users')]

      await ref.add({
        nome: name,
        email: email,
        desc: desc
      })

      setName('');
      setEmail('');
    }catch(err){  
      console.log(err)
    }
  }
  return (
    <Container>
      <Header navigation={navigation} title="ADD USER" />

      <Content>
        <Title>ADD USER</Title>
        <ImageProfile />
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

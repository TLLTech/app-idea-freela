import React from "react";
import { FlatList } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { RectButton } from "react-native-gesture-handler";

import {
  Container,
  Title,
  ContetnListImage,
  StarView,
  ContentFooter,
  ValueNote,
  ReviewsText,
  Content,
  ListProfile,
  ListProfileImage,
  ListProfileView,
  ListProfileName,
  ListProfileStar,
  ListProfileComent
} from "./styles";

import Header from "../../components/Header";

export default function RequestProfile({ navigation }) {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  return (
    <Container>
      <Header navigation={navigation} title="Request Profile" />

      <Content>
        <Title>ISABEL</Title>
        <ContetnListImage />
        <StarView>
          {data.map(item => (
            <Icon key={item} name="star" size={40} color="#979D4C" />
          ))}
        </StarView>
        <ContentFooter>
          <ValueNote>9.6/10</ValueNote>
          <ReviewsText>5.425 reviews</ReviewsText>
          <RectButton>
            <Icon name="sort" size={30} color="#000" />
          </RectButton>
        </ContentFooter>
        <FlatList
          data={dataList}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <ListProfile>
              <ListProfileImage />
              <ListProfileView>
                <ListProfileStar>
                  {data.map(item => (
                    <Icon key={item} name="star" size={35} color="#979D4C" />
                  ))}
                </ListProfileStar>

                <ListProfileName>Nombre</ListProfileName>
                <ListProfileComent>Opnion del usuario</ListProfileComent>
              </ListProfileView>
            </ListProfile>
          )}
        />
      </Content>
    </Container>
  );
}

RequestProfile.navigationOptions = {
  drawerLabel: "Profile Create"
};

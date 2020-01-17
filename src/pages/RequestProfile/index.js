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
  ListProfileComent,
  LikesText,
  ViewList,
  LikeView,
  HeaderView,
  Icons,
  Header,
  ButtonArrowLeft
} from "./styles";

// import Header from "../;../components/Header";

export default function RequestProfile({ navigation }) {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  function handleGoBack() {
    navigation.navigate('Dashboard')
  }
  return (
    <Container>
      {/* <Header navigation={navigation} title="Request Profile" /> */}
      <Header>
        <ButtonArrowLeft onPress={handleGoBack}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </ButtonArrowLeft>
      </Header>
      <Content>
        <HeaderView>
          <Title>ISABEL</Title>
          <Icons name="more-vert" size={30} color="#000" />
        </HeaderView>
        <ContetnListImage />
        <StarView>
          {data.map(item => (
            <Icon key={item} name="star" size={40} color="#ffd203" />
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
                <ViewList>
                  <ListProfileStar>
                    {data.map(item => (
                      <Icon key={item} name="star" size={35} color="#ffd203" />
                    ))}
                  </ListProfileStar>

                  <ListProfileName>Nombre</ListProfileName>
                  <ListProfileComent>Opnion del usuario</ListProfileComent>
                </ViewList>
                <LikeView>
                  <Icon name="thumb-up" size={25} color="#ccc" />
                  <LikesText>25</LikesText>
                </LikeView>
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

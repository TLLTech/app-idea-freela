import React from "react";
import { FlatList } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import {
  Container,
  Header,
  ButtonBurguer,
  ButtonDrawer,
  ButtonSearch,
  HeaderTitle,
  Content,
  ContentView,
  ContentListView,
  ContetnListImage,
  Title,
  ContentStart,
  ContentFooter,
  ContentFooterTextValue,
  ContentFooterReviews
} from "./styles";

export default function Dashboard({ navigation }) {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  function handleMenuDrawer() {
    navigation.openDrawer();
  }

  return (
    <Container>
      <Header>
        <ButtonDrawer onPress={handleMenuDrawer}>
          <Icon name="menu" size={32} color="#000" />
        </ButtonDrawer>
        <HeaderTitle>RANKING GENERAL</HeaderTitle>
        <ButtonBurguer>
          <Icon name="filter-list" size={32} color="#000" />
        </ButtonBurguer>
        <ButtonSearch>
          <Icon name="search" size={32} color="#000" />
        </ButtonSearch>
      </Header>
      <Content>
        <FlatList
          data={dataList}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <ContentListView key={item}>
              <ContetnListImage />
              <ContentView>
                <Title>Nombre Tipster 1</Title>
                <ContentStart>
                  {data.map(item => (
                    <Icon key={item} name="star" size={32} color="#979D4C" />
                  ))}
                </ContentStart>
                <ContentFooter>
                  <ContentFooterTextValue>9.6/10</ContentFooterTextValue>
                  <ContentFooterReviews>365 Reviews</ContentFooterReviews>
                </ContentFooter>
              </ContentView>
            </ContentListView>
          )}
        />
      </Content>
    </Container>
  );
}

{
  /* <Icon key={item} name="star-border" size={32} color="#979D4C" /> */
}

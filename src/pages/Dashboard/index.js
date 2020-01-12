import React from "react";
import { FlatList } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

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

export default function Dashboard() {
  const data = [1, 2, 4, 5];
  const dataList = [1, 2, 3];

  return (
    <Container>
      <Header>
        <ButtonDrawer>
          <Icon name="md-menu" size={32} color="#000" />
        </ButtonDrawer>
        <HeaderTitle>RANKING GENERAL</HeaderTitle>
        <ButtonBurguer>
          <Icon name="md-menu" size={32} color="#000" />
        </ButtonBurguer>
        <ButtonSearch>
          <Icon name="md-search" size={32} color="#000" />
        </ButtonSearch>
      </Header>
      <Content>
        <FlatList
          data={dataList}
          keyExtractor={item => toString(item)}
          renderItem={({ item }) => (
            <ContentListView key={item}>
              <ContetnListImage />
              <ContentView>
                <Title>Nombre Tipster 1</Title>
                <ContentStart>
                  {data.map(item => (
                    <Icon key={item} name="md-star" size={32} color="#979D4C" />
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

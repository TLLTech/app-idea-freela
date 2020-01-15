import React, { useState } from "react";
import { FlatList, Text } from "react-native";
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
  ContentFooterReviews,
  ModalContent,
  TitleModal,
  SelectText,
  HeaderModal,
  InputSearch
} from "./styles";

import ModalFilter from "../../components/Modal";

export default function Dashboard({ navigation }) {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  const [visible, setVisible] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);

  function handleMenuDrawer() {
    navigation.openDrawer();
  }

  function handleOpenModal() {
    setVisible(true);
  }

  function handleCloseModal() {
    setVisible(false);
  }

  return (
    <Container>
      <Header>
        <ButtonDrawer onPress={handleMenuDrawer}>
          <Icon name="menu" size={32} color="#000" />
        </ButtonDrawer>
        <HeaderTitle>RANKING GENERAL</HeaderTitle>
        <ButtonBurguer onPress={handleOpenModal}>
          <Icon name="filter-list" size={32} color="#000" />
        </ButtonBurguer>
        <ButtonSearch>
          <Icon name="search" size={32} color="#000" />
        </ButtonSearch>
      </Header>

      <InputSearch visible={visibleInput} />

      {/* Modal para filter */}

      <ModalFilter visible={visible}>
        <ModalContent>
          <HeaderModal>
            <TitleModal>Select desired filter</TitleModal>
            <Icon
              onPress={handleCloseModal}
              name="close"
              size={30}
              color="#000"
            />
          </HeaderModal>
          <SelectText> Higher average calification - HAC</SelectText>
          <SelectText> Most recent - MC</SelectText>
          <SelectText>And so on - ADO</SelectText>
        </ModalContent>
      </ModalFilter>

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

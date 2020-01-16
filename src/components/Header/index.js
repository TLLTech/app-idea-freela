import React, { useState } from "react";
import { View } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import {
  Container,
  Header,
  HeaderTitle,
  ButtonBurguer,
  ButtonDrawer,
  ButtonSearch,
  ModalContent,
  HeaderModal,
  TitleModal,
  SelectText
} from "./styles";

import ModalFilter from "../Modal";

export default function HeaderComponent({ navigation, title }) {
  const [visible, setVisible] = useState(false);

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
    <>
      <Header>
        <ButtonDrawer onPress={handleMenuDrawer}>
          <Icon name="menu" size={32} color="#fff" />
        </ButtonDrawer>
        <HeaderTitle>{title}</HeaderTitle>
        <ButtonBurguer onPress={handleOpenModal}>
          <Icon name="filter-list" size={32} color="#fff" />
        </ButtonBurguer>
        <ButtonSearch>
          <Icon name="search" size={32} color="#fff" />
        </ButtonSearch>
      </Header>
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
    </>
  );
}

import React, { useState } from "react";
import { FlatList } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { RectButton } from "react-native-gesture-handler";
import CircleCheckBox from "react-native-circle-checkbox";

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
  ButtonArrowLeft,
  ButtonInfo,
  ButtonInfoText,
  TitleModal,
  SelectRelevane,
  ButtonAppli,
  ButtonView,
  ButtonText,
  ButtonCheckCircle,
  CircleCheck
} from "./styles";

// import Header from "../;../components/Header";
import ModalFilterProfile from "../../components/ModalFilterProfile";
import ModalFilterProfileComment from "../../components/ModalFilterProfileComment";

export default function RequestProfile({ navigation }) {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  const [visible, setVisible] = useState(false);
  const [visibleRele, setVisibleRele] = useState(false);

  function handleGoBack() {
    navigation.navigate("Dashboard");
  }

  function handleInfoModal() {
    setVisible(true);
  }

  function handleCloseModal() {
    setVisible(false);
  }

  function handleFilter() {
    setVisibleRele(true);
  }

  function closeModalFilter() {
    setVisibleRele(false);
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
          <Icons
            name="more-vert"
            size={30}
            color="#000"
            onPress={handleInfoModal}
          />
          <ModalFilterProfile visible={visible}>
            <ButtonInfoText onPress={handleCloseModal}>
              Información
            </ButtonInfoText>
            <ButtonInfoText onPress={handleCloseModal}>
              Dar valoración
            </ButtonInfoText>
            <ButtonInfoText onPress={handleCloseModal}>
              Ir al canal
            </ButtonInfoText>
          </ModalFilterProfile>
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
          <RectButton onPress={handleFilter}>
            <Icon name="sort" size={30} color="#000" />
          </RectButton>

          {/* Modal Filter */}
          <ModalFilterProfileComment visible={visibleRele}>
            <TitleModal>Ordenar resñas por</TitleModal>
            <ButtonCheckCircle>
              <CircleCheck
                checked={false}
                onToggle={checked => console.log("My state is: ", checked)}
              />
              <SelectRelevane>Más relevantes</SelectRelevane>
            </ButtonCheckCircle>
            <ButtonCheckCircle>
              <CircleCheck
                checked={true}
                onToggle={checked => console.log("My state is: ", checked)}
              />
              <SelectRelevane>Más recentes</SelectRelevane>
            </ButtonCheckCircle>
            <ButtonView>
              <ButtonAppli>
                <ButtonText onPress={closeModalFilter}>CANCELAR</ButtonText>
              </ButtonAppli>
              <ButtonAppli>
                <ButtonText onPress={closeModalFilter}>APLICAR</ButtonText>
              </ButtonAppli>
            </ButtonView>
          </ModalFilterProfileComment>
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

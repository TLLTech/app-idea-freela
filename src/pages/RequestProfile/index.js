import React, { useState, useEffect } from "react";
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
import api from "../../services/api";

// import Header from "../;../components/Header";
import ModalFilterProfile from "../../components/ModalFilterProfile";
import ModalFilterProfileComment from "../../components/ModalFilterProfileComment";

export default function RequestProfile({ navigation }) {
  const chaves = navigation.getParam("key");

  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  const [visible, setVisible] = useState(false);
  const [visibleRele, setVisibleRele] = useState(false);
  const [dataProfile, setDataProfile] = useState([]);
  const [name, setName] = useState("");

  const [dataComment, setDataComment] = useState([]);

  function loadDataComment() {
    api
      .database()
      .ref("comments")
      .on("value", snapshot => {
        const listComments = [];
        snapshot.forEach(childItem => {
          let item = childItem.val();
          item["key"] = childItem.key;
          listComments.push(item);
        });

        setDataComment(listComments);
      });
  }

  useEffect(() => {
    loadDataComment();
  }, []);

  useEffect(() => {
    loadProfile();
  }, []);

  function loadProfile() {
    try {
      api
        .database()
        .ref("users")
        .child("-Lzt7y7V0INJctWxebKn")
        .on("value", snapshot => {
          setDataProfile(snapshot);
          // const listUsers = [];
          // snapshot.forEach(childItem => {
          //   let item = childItem.val().name;
          //   listUsers.push(item);
          // });

          // console.log(listUsers);
          // setDataUsers(listUsers);
        });
    } catch (err) {
      console.log(err);
    }
  }

  // var commentsRef = firebase.database().ref('post-comments/' + postId);
  // commentsRef.on('child_changed', function(data) {
  //   setCommentValues(postElement, data.key, data.val().text, data.val().author);
  // });

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

  function handleNavigateReviewStar() {
    navigation.navigate("ReviewStar", { chaves });
  }

  console.log(dataComment);

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
          <Title>Thiago</Title>
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
            <ButtonInfoText onPress={handleNavigateReviewStar}>
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
          data={dataComment}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <ListProfile>
              <ListProfileImage source={{ uri: item.photoUrl }} />
              <ListProfileView>
                <ViewList>
                  <ListProfileStar>
                    {data.map(item => (
                      <Icon key={item} name="star" size={35} color="#ffd203" />
                    ))}
                  </ListProfileStar>

                  <ListProfileName>{item.username}</ListProfileName>
                  <ListProfileComent>{item.comment}</ListProfileComent>
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

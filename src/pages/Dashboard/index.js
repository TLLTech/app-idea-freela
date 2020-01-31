import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import {
  Container,
  Content,
  ContentView,
  ContentListView,
  ContetnListImage,
  Title,
  ContentStart,
  ContentFooter,
  ContentFooterTextValue,
  ContentFooterReviews,
  InputSearch
} from "./styles";

import api from "../../services/api";
import Header from "../../components/Header";

export default function Dashboard({ navigation }) {
  const data = [1, 2, 3, 4, 5];
  const dataList = [1, 2, 3];

  const [visible, setVisible] = useState(false);
  const [visibleInput, setVisibleInput] = useState(true);
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    api
      .database()
      .ref("users")
      .on("value", snapshot => {
        const listUsers = [];
        snapshot.forEach(childItem => {
          let item = childItem.val();
          item["key"] = childItem.key;
          listUsers.push(item);
        });

        setDataUsers(listUsers);
      });
  }

  function handleProfile(key) {
    navigation.navigate("RequestProfile", { key });
  }

  return (
    <Container>
      {/* Header da Aplicação */}
      <Header navigation={navigation} title="RANKING GENERAL" />

      <InputSearch visible={visibleInput} />
      <Content>
        <FlatList
          data={dataUsers}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <ContentListView
              key={item.key}
              onPress={() => handleProfile(item.key)}
            >
              <ContetnListImage />
              <ContentView>
                <Title>{item.name}</Title>
                <ContentStart>
                  {data.map(item => (
                    <Icon key={item} name="star" size={32} color="#ffd203" />
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

Dashboard.navigationOptions = {
  drawerIcon: ({ tintColor }) => <Icon name="home" size={30} color="#000" />
};

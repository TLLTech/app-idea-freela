import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import { Container } from "./styles";

export default function Logout({ navigation }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function loadingLogout() {
      setTimeout(() => {
        setLoading(true);
        navigation.navigate("SignIn");
      }, 3000);

      setLoading(false);
    }

    loadingLogout();
  }, []);
  return (
    <Container>
      {loading ? null : <ActivityIndicator size={40} color="#000" />}
    </Container>
  );
}

Logout.navigationOptions = {
  drawerIcon: ({ tintColor }) => <Icon name="input" size={30} color="#000" />
};

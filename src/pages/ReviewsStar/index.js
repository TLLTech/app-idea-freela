import React, { useState } from "react";
import Icon from "@expo/vector-icons/MaterialIcons";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Rating, AirbnbRating } from "react-native-ratings";

import { Container, InputComment, InputView } from "./styles";

export default function ReviewsStar({ navigation }) {
  const [star, setStar] = useState("");

  function ratingCompleted(rating) {
    console.log("Rating is " + rating);
    setStar(rating);
  }

  return (
    <Container>
      <Rating
        type="star"
        showRating
        minValue={10}
        onFinishRating={ratingCompleted}
        ratingCount={5}
        style={{
          paddingVertical: 10,
          margin: 10,
          backgroundColor: "transparent"
        }}
      />

      <InputView>
        <InputComment placeholder="Decribe tu experiencia" />
      </InputView>
    </Container>
  );
}

// ReviewsStar.;
ReviewsStar.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: "#ccc",
          borderRadius: 20
        }}
      />
      <View style={{ flexDirection: "column", marginLeft: 10 }}>
        <Text style={{ fontSize: 16, color: "#fff" }}>Profile Name</Text>
        <Text style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
          Valora tu experiencia
        </Text>
      </View>
    </View>
  ),
  headerLeft: (
    <Icon
      name="clear"
      size={30}
      color="#fff"
      style={{ marginLeft: 10 }}
      onPress={() => navigation.navigate("RequestProfile")}
    />
  ),
  headerRight: (
    <RectButton style={{ marginRight: 20 }}>
      <Text style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>
        PUBLICAR
      </Text>
    </RectButton>
  ),
  headerStyle: {
    backgroundColor: "#1a9ae2"
  }
});
